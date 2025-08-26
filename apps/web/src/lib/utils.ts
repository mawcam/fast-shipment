import { TOKEN_KEY } from "../constants";
import { Status } from "./types";

export const formatDate = (date: string | Date | null): string => {
  if (!date) return "No date details";

  const dateObj = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateObj);
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getStatusLabel = (status: Status) => {
  switch (status) {
    case Status.Delayed:
      return "Delayed";
    case Status.OnTime:
      return "On Time";
    case Status.InTransit:
      return "In Transit";
  }
};
