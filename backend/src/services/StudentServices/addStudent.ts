import { FastifyInstance } from "fastify";
import logger from "../../utils/logger.js";
import isExistingService from "./isStudentExists.js";
import bcrypt from "bcryptjs";

async function addStudentService(fastify: FastifyInstance) {
    return async function addStudent(
        id: number, 
        email: string, 
        password: string, 
        firstName: string, 
        lastName: string, 
        middleName: string
    ){

        const isExisting = await isExistingService(fastify);

        if(await isExisting(id)){
            throw new Error("Student with this ID already exists");
        }

        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            await fastify.prisma.student.create({
                data: {
                    id,
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    middleName
                }
            });

        }catch(err: unknown){
            if(err instanceof Error){
                logger.error("Error occurred in add student ", err.message)
                throw new Error("Error in adding student")
            }else{
                logger.error("Unknown error occurred in adding the student: ", err)
                throw new Error("Unknown error occurred in adding the student")
            }
        }
    }
}

export default addStudentService;



