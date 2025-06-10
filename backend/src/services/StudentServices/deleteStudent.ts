import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";
import isExisting from "./isExisting.js";


async function DeleteStudent(id: number) {
    const prisma = new PrismaClient();

    try {
        if (!await isExisting(id)) {
            throw new Error('Student does not exist');
        }

        await prisma.student.delete({
            where: {
                id: id
            }
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

export default DeleteStudent;