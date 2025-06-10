import { FastifyInstance } from "fastify";
import logger from "../../utils/logger.js";
import isExistingService from "./isStudentExists.js";

function deleteStudentService(fastify: FastifyInstance) {
    return async function deleteStudent(id: number) {
        try {

            const isExisting = await isExistingService(fastify);
            
            if (!await isExisting(id)) {
                throw new Error('Student does not exist');
            }

            await fastify.prisma.student.delete({
                where: { id }
            });

            logger.info(`Student with ID ${id} deleted successfully.`);
        } catch (err: unknown) {
            if (err instanceof Error) {
                logger.error(`Error deleting student: ${err.message}`);
            } else {
                logger.error('An unknown error occurred while deleting the student');
            }
            throw err;
        } 
    }
}

export default deleteStudentService;