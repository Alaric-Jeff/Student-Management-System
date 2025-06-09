import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function AddStudent(studentId: string, password: string, firstName: string, lastName: string, middleName: string){
    try{

        const existingStudent = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if(existingStudent){
            throw new Error('Student already exists');
        }

        await prisma.student.create({
            data: {
                id: studentId,
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