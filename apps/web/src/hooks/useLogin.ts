import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/endpoints";
import { getToken, saveToken } from "../lib/utils";
import { useEffect } from "react";

const credentials = {
  email: "alice@example.com",
  password: "password123",
};

interface LoginCredentials {
  email: string;
  password: string;
}

const useLogin = ({ autoLogin = false }: { autoLogin?: boolean } = {}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      login(email, password),
    onSuccess: (data) => {
      saveToken(data.access_token);
      queryClient.invalidateQueries({ queryKey: ["me"] });
      queryClient.invalidateQueries({ queryKey: ["shipments"] });
    },
  });

  useEffect(() => {
    const { email, password } = credentials;
    const token = getToken();

    if (autoLogin && !token) {
      mutation.mutate({ email, password });
    }
  }, [autoLogin, mutation]);

  return {
    login: mutation.mutate,
  };
};

export default useLogin;
