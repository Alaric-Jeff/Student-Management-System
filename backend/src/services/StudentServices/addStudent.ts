import { Prisma, PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";
import isExisting from "./isExisting.js";
import bcrypt from "bcryptjs";

async function addStudentService(prisma: PrismaClient) {
    return async function addStudent(
        id: number, email: string, password: string, firstName: string, lastName: string, middleName: string
    ){
        try{
            
        }catch(err: unknown){
            if(err instanceof Error){
                logger.error("Error occured in add student ", err.message)
                throw new Error("Error in adding student")
            }else{
                logger.error("Unknown error occured in adding the student: ", err)
                throw new Error("Unknown error occured in adding the student")
            }
        }
    }
}

export default addStudentService;



