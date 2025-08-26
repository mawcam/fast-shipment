import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Shipment } from '@prisma/client';
import { getMockedShipments } from 'src/utils';

@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  create(createShipmentDto: CreateShipmentDto) {
    return this.prisma.shipment.create({
      data: {
        ...createShipmentDto,
        owner: {
          connect: {
            id: '1',
          },
        },
      },
    });
  }

  getStatus(shipment: Shipment) {
    const now = new Date();
    const { eta, deliveredAt } = shipment;

    if ((!deliveredAt && now > eta) || (deliveredAt && deliveredAt > eta)) {
      return 'delayed';
    }

    if (deliveredAt && deliveredAt <= eta) {
      return 'on-time';
    }

    return 'in-transit';
  }

  async findAll() {
    const shipments = await this.prisma.shipment.findMany();

    return shipments.map((shipment) => ({
      ...shipment,
      status: this.getStatus(shipment),
    }));
  }

  async findAllByUser(userId: string) {
    const shipments = await this.prisma.shipment.findMany({
      where: {
        ownerId: userId,
      },
    });

    return shipments.map((shipment) => ({
      ...shipment,
      status: this.getStatus(shipment),
    }));
  }

  findOne(id: string) {
    return this.prisma.shipment.findUnique({
      where: {
        id,
      },
    });
  }

  markDelivered(id: string) {
    return this.prisma.shipment.update({
      where: { id },
      data: { deliveredAt: new Date() },
    });
  }

  update(id: string, updateShipmentDto: UpdateShipmentDto) {
    return this.prisma.shipment.update({
      where: {
        id,
      },
      data: updateShipmentDto,
    });
  }

  async resetAllShipments() {
    const users = await this.prisma.user.findMany();
    const mockedShipments = getMockedShipments(users);
    await this.prisma.shipment.deleteMany();
    return await this.prisma.shipment.createMany({
      data: mockedShipments,
    });
  }

  remove(id: string) {
    return this.prisma.shipment.delete({
      where: {
        id,
      },
    });
  }
}
