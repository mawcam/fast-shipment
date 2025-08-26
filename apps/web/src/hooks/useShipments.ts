import { useQuery } from "@tanstack/react-query";
import { getShipments } from "../lib/endpoints";

const useShipments = () => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["shipments"],
    queryFn: getShipments,
    refetchOnWindowFocus: false,
  });

  return { data, loading: isLoading || isFetching, error, refetch };
};

export default useShipments;
