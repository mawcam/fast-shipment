import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { getMockedShipments } from 'src/utils';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  const password = await bcrypt.hash('password123', 10);

  const users = [
    {
      id: 'a3f4c4e1-8d27-4f36-b20a-b33a6b2e1a11',
      email: 'alice@example.com',
      name: 'Alice',
      password,
    },
    {
      id: 'b2e1d3f6-7a92-46c2-9af8-42e6d2c9c222',
      email: 'bob@example.com',
      name: 'Bob',
      password,
    },
    {
      id: 'c7d5a8f9-2b31-4d84-88f3-67a1e4d3d333',
      email: 'carol@example.com',
      name: 'Carol',
      password,
    },
    {
      id: 'd1e9f2a4-5c63-4b75-9de2-81b3f7a4e444',
      email: 'dave@example.com',
      name: 'Dave',
      password,
    },
  ];

  const shipments = getMockedShipments(users);

  await prisma.user.createMany({
    data: users,
  });

  await prisma.shipment.createMany({
    data: shipments,
  });
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
