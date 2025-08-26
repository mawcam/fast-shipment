import { useEffect } from "react";
import supabase from "../lib/supabase";
import { useQueryClient } from "@tanstack/react-query";
import type { Shipment } from "../lib/types";

const useSubscribe = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    supabase.realtime.setAuth();
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
        },
        (payload) => {
          if (payload.errors.length > 0) {
            console.error(
              `Change detected in shipments table but errors occurred: ${payload.errors.join("\n")}`
            );
            return;
          }
          // Manually update the shipments cache
          queryClient.setQueryData<Shipment[]>(["shipments"], (oldData) => {
            if (!oldData) return oldData;

            return oldData.map((shipment) => {
              if (shipment.id === payload.new.id) {
                return {
                  ...shipment,
                  ...payload.new,
                };
              }
              return shipment;
            });
          });
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);
};

export default useSubscribe;
