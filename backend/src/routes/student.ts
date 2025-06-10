import { FastifyInstance } from 'fastify';
import addStudentService from '../services/StudentServices/addStudent.js';

export default async function studentRoutes(fastify: FastifyInstance) {
    // Get the addStudent service
    const addStudent = addStudentService(fastify.prisma);

    // Register the route
    fastify.post('/students', async (request, reply) => {
        try {
            const student = await addStudent(request.body as any);
            return reply.code(201).send(student);
        } catch (error) {
            if (error instanceof Error) {
                return reply.code(400).send({ error: error.message });
            }
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
} 