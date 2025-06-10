import Fastify from 'fastify';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import './types/fastify.d.ts'; 
import prismaPlugin from './plugins/prisma.js';

dotenv.config();

const fastify = Fastify({
    logger: false
})

await fastify.register(prismaPlugin);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST: string = process.env.HOST || '0.0.0.0'

const start = async ()=> {
    try{
        await fastify.listen({
            port: PORT,
            host: HOST
        })
        logger.info(`Server is running on port ${PORT}`);
    }catch(err: unknown){
        if(err instanceof Error){
            logger.error(err.message, 'Error starting the server');
        }else{
            logger.error('Unknown error starting the server', err);
        }
        process.exit(1);
    }
}

start();


