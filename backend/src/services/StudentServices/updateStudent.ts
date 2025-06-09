import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";
import isExisting from "./isExisting.js";

const prisma = new PrismaClient();

async function UpdateStudent(id: number, updateData: object){
    try{

        if(!await isExisting(id)){
            throw new Error('Student does not exist');
        }

    }catch(err: unknown){
        if (err instanceof Error) {
            console.error(`Error updating student: ${err.message}`);
        } else {
            console.error('An unknown error occurred while updating the student');
        }
        throw err; 
    }
};

export default UpdateStudent;