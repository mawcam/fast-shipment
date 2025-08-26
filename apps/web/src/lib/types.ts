export enum Status {
  Delayed = "delayed",
  OnTime = "on-time",
  InTransit = "in-transit",
}

export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  shippedAt: Date | null;
  eta: Date;
  deliveredAt: Date | null;
  ownerId: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
