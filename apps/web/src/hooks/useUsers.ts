import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../lib/endpoints";

const useUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { data, isLoading, error };
};

export default useUsers;
