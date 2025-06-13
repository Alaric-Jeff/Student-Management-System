import { FastifyInstance } from "fastify";
import logger from "../../utils/logger.js";
import isExistingService from "./isStudentExists.js";

async function UpdateStudentService(fastify: FastifyInstance){
    return async function updateStudent(id: number, updateColumns: object){
        try{
            const isExisting = await isExistingService(fastify);

            if(!(await isExisting(id))){
                throw new Error("Student with this ID does not exist");
            }

            await fastify.prisma.student.update({
                where: { id },
                data: updateColumns 
            })
            logger.info(`Student with ID ${id} updated successfully`);
        }catch(err: unknown){
            if(err instanceof Error){
                logger.error("Error occurred in update student ", err.message);
                throw new Error("Error in updating student");
            }else{
                logger.error("Unknown error occurred in updating the student: ", err);
                throw new Error("Unknown error occurred in updating the student");
            }
        }
    }
};

export default UpdateStudentService;