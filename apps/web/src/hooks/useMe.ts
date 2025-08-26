import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../lib/endpoints";

const useMe = () => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });

  return { data, loading: isLoading || isFetching, error, refetch };
};

export default useMe;
