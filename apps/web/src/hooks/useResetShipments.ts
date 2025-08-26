import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetAllShipments } from "../lib/endpoints";

const useResetShipments = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: resetAllShipments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shipments"] });
    },
  });

  return {
    reset: mutation.mutate,
    loading: mutation.isPending,
    error: mutation.error,
  };
};

export default useResetShipments;
