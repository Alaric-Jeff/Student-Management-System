import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import logger from '../utils/logger.js';

async function prismaPlugin(fastify: FastifyInstance) {
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();
    logger.info('Connected to Prisma');
  } catch (err) {
    if (err instanceof Error) {
      logger.error(`Prisma connection error: ${err.message}`);
    } else {
      logger.error('An unknown error occurred while connecting to Prisma');
    }
    throw err;
  }

  fastify.decorate('prisma', prisma);

  fastify.addHook('onClose', async () => {
    await prisma.$disconnect();
    logger.info('Disconnected Prisma client');
  });
}

export default fp(prismaPlugin);
