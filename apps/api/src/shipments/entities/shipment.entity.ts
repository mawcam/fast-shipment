import { Shipment } from '@prisma/client';

export class ShipmentEntity implements Shipment {
  id: string;
  origin: string;
  destination: string;
  shippedAt: Date | null;
  eta: Date;
  deliveredAt: Date | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}
