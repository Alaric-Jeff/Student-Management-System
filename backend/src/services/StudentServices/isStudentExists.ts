import { FastifyInstance } from "fastify";
import logger from "../../utils/logger.js";

async function isExistingService(fastify: FastifyInstance){
    return async function isExisting(id: number): Promise<Boolean>{
        try{
            const student = await fastify.prisma.student.findUnique({
                where: { id }
            })

            return student !== null
        }catch(err: unknown){
            if(err instanceof Error){
                logger.error("Error in checking existence of student ", err.message)
                throw new Error("Error occurred in checking existence of student")
            }else{
                logger.error("Error in checking existence of student ", err)
                throw new Error("Unknown error occurred in checking existence of student")
            }
        }
    }
}

export default isExistingService;