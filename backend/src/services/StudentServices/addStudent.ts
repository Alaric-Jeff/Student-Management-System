import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";
import isExisting from "./isExisting.js";

const prisma = new PrismaClient();

async function AddStudent(id: number, email: string, password: string, firstName: string, lastName: string, middleName: string){
    try{

        if(await isExisting(id)){
            throw new Error('Student already exist');
        }

        await prisma.student.create({
            data: {
                id: id,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                middleName: middleName
            }
        })
    }catch(err: unknown){
        if (err instanceof Error) {
            console.error(`Error adding student: ${err.message}`);
        } else {
            console.error('An unknown error occurred while adding the student');
        }
        throw err; 
    }
}

export default AddStudent;