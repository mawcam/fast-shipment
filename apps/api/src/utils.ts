import { User } from '@prisma/client';

export const getMockedShipments = (users: User[]) => {
  return [
    {
      id: '101f2e39-78a9-41d2-bf47-3f2c7a1b1001',
      origin: 'New York, NY',
      destination: 'Los Angeles, CA',
      shippedAt: new Date('2025-08-20T10:00:00Z'),
      eta: new Date('2025-08-23T18:00:00Z'),
      deliveredAt: new Date('2025-08-23T17:50:00Z'), // On Time
      ownerId: users[0].id,
    },
    {
      id: '202f3e39-89b0-42c3-af58-4f3d8b2c2002',
      origin: 'Chicago, IL',
      destination: 'Houston, TX',
      shippedAt: new Date('2025-08-21T08:00:00Z'),
      eta: new Date('2025-08-23T12:00:00Z'),
      deliveredAt: new Date('2025-08-23T14:00:00Z'), // Delayed
      ownerId: users[0].id,
    },
    {
      id: '303f4e39-90c1-43d4-bf69-5f4e9c3d3003',
      origin: 'San Francisco, CA',
      destination: 'Seattle, WA',
      shippedAt: new Date('2025-08-22T09:30:00Z'),
      eta: new Date('2025-08-26T15:00:00Z'),
      deliveredAt: null, // In Transit
      ownerId: users[0].id,
    },
    {
      id: '404f5e39-01d2-44e5-bf80-6f5f0d4e4004',
      origin: 'Miami, FL',
      destination: 'Atlanta, GA',
      shippedAt: new Date('2025-08-20T11:00:00Z'),
      eta: new Date('2025-08-22T20:00:00Z'),
      deliveredAt: new Date('2025-08-22T19:30:00Z'), // On Time
      ownerId: users[1].id,
    },
    {
      id: '505f6e39-12e3-45f6-c091-7f601e5f5005',
      origin: 'Denver, CO',
      destination: 'Dallas, TX',
      shippedAt: new Date('2025-08-19T15:00:00Z'),
      eta: new Date('2025-08-21T15:00:00Z'),
      deliveredAt: new Date('2025-08-21T19:00:00Z'), // Delayed
      ownerId: users[1].id,
    },
    {
      id: '606f7e39-23f4-46g7-d1a2-8f712f6g6006',
      origin: 'Boston, MA',
      destination: 'Philadelphia, PA',
      shippedAt: new Date('2025-08-22T07:00:00Z'),
      eta: new Date('2025-08-28T12:00:00Z'),
      deliveredAt: null, // In Transit
      ownerId: users[1].id,
    },
    {
      id: '707f8e39-34g5-47h8-e2b3-9f823g7h7007',
      origin: 'Phoenix, AZ',
      destination: 'Las Vegas, NV',
      shippedAt: new Date('2025-08-18T09:00:00Z'),
      eta: new Date('2025-08-21T18:00:00Z'),
      deliveredAt: new Date('2025-08-21T18:00:00Z'), // On Time
      ownerId: users[2].id,
    },
    {
      id: '808f9e39-45h6-48i9-f3c4-0g934h8i8008',
      origin: 'Portland, OR',
      destination: 'Salt Lake City, UT',
      shippedAt: new Date('2025-08-19T14:00:00Z'),
      eta: new Date('2025-08-22T12:00:00Z'),
      deliveredAt: new Date('2025-08-23T09:00:00Z'), // Delayed
      ownerId: users[2].id,
    },
    {
      id: '909fae39-56i7-49j0-g4d5-1h045i9j9009',
      origin: 'Minneapolis, MN',
      destination: 'St. Louis, MO',
      shippedAt: new Date('2025-08-22T10:00:00Z'),
      eta: new Date('2025-08-27T18:00:00Z'),
      deliveredAt: null, // In Transit
      ownerId: users[3].id,
    },
    {
      id: 'a10fbe39-67j8-50k1-h5e6-2i156j0k1010',
      origin: 'San Diego, CA',
      destination: 'San Antonio, TX',
      shippedAt: new Date('2025-08-20T16:00:00Z'),
      eta: new Date('2025-08-24T20:00:00Z'),
      deliveredAt: new Date('2025-08-24T19:00:00Z'), // On Time
      ownerId: users[3].id,
    },
  ];
};
