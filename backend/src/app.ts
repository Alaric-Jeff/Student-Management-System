import Fastify from 'fastify';
import dotenv from 'dotenv';
import logger from './utils/logger.js';

dotenv.config();

const fastify = Fastify({
    logger: false
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const start = async ()=> {
    try{
        await fastify.listen({
            port: PORT,
            host: '0.0.0.0'
        })
        logger.info(`Server is running on port ${PORT}`);
    }catch(err: any){
        logger.error(err, 'Error starting the server');
        process.exit(1);
    }
}

start();


