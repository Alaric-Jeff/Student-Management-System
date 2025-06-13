import { Type } from '@sinclair/typebox';
import { Static } from '@sinclair/typebox';

const enrollmentSchema = Type.Object({
    id: Type.Integer({ minimum: 1 }),
    studentId: Type.Integer({ minimum: 11 }),
    subjectId: Type.Integer({ minimum: 1 }),
    status: Type.Enum({
        regular: 'regular',
        irregular: 'irregular',
        graduated: 'graduated'
    }),
    grade: Type.Optional(Type.Number({ minimum: 0, maximum: 100 })),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' }))
});

type EnrollmentSchema = Static<typeof enrollmentSchema>;

export default enrollmentSchema; 