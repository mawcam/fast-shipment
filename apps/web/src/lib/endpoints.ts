import { API_BASE } from "../constants";
import type { Shipment, User } from "./types";
import { getToken } from "./utils";

const getHeaders = () => {
  const headers = new Headers();
  const token = getToken();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  headers.set("Content-Type", "application/json");

  return headers;
};

export const getShipments = async () => {
  const response = await fetch(`${API_BASE}/shipments`, {
    headers: getHeaders(),
  });
  return response.json() as Promise<Shipment[]>;
};

export const getCurrentUser = async () => {
  const response = await fetch(`${API_BASE}/auth/me`, {
    headers: getHeaders(),
  });
  return response.json() as Promise<User>;
};

export const getUsers = async () => {
  const response = await fetch(`${API_BASE}/auth/users`, {
    headers: getHeaders(),
  });
  return response.json() as Promise<User[]>;
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: getHeaders(),
  });

  return response.json() as Promise<{
    access_token: string;
    user: User;
  }>;
};

export const markShipmentDelivered = async (shipmentId: string) => {
  const response = await fetch(
    `${API_BASE}/shipments/${shipmentId}/mark-delivered`,
    {
      method: "PATCH",
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to mark shipment as delivered");
  }

  return response.json() as Promise<Shipment>;
};

// Dev Purposes
export const resetAllShipments = async () => {
  const response = await fetch(`${API_BASE}/shipments/reset-all-shipments`, {
    method: "POST",
    headers: getHeaders(),
  });
  return response.json() as Promise<Shipment[]>;
};
