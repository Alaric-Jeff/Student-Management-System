import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function isExisting(studentId: number): Promise<boolean> {
    try {
        const existingStudent = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        return existingStudent !== null;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error checking if student exists: ${err.message}`);
        } else {
            console.error('An unknown error occurred while checking if the student exists');
        }
        throw err; 
    }
}

export default isExisting;