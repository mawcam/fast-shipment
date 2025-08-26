import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markShipmentDelivered } from "../lib/endpoints";

const useMarkDelivered = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: markShipmentDelivered,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shipments"] });
    },
  });

  return {
    markDelivered: mutation.mutate,
    loading: mutation.isPending,
    error: mutation.error,
  };
};

export default useMarkDelivered;
