import { Type } from '@sinclair/typebox';
import { Static } from '@sinclair/typebox';

const studentSchema = Type.Object({
    id: Type.Integer({ minimum: 11 }),
    firstName: Type.String({ minLength: 1, maxLength: 50 }),
    lastName: Type.String({ minLength: 1, maxLength: 50 }),
    middleName: Type.Optional(Type.String({ minLength: 1, maxLength: 50 })),
    age: Type.Integer({ minimum: 16, maximum: 120 }),
    email: Type.String({ format: 'email' }),
    password: Type.String({ minLength: 8, maxLength: 128 }),
    status: Type.Enum({
        regular: 'regular',
        irregular: 'irregular',
        graduated: 'graduated'
    }),
    programId: Type.Optional(Type.Integer({ minimum: 1 })),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' }))
});

type StudentSchema = Static<typeof studentSchema>;

export default studentSchema;