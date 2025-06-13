import { Type } from '@sinclair/typebox';
import { Static } from '@sinclair/typebox';

const studentInformationSchema = Type.Object({
    id: Type.Integer({ minimum: 1 }),
    studentId: Type.Integer({ minimum: 11 }),
    address: Type.String({ minLength: 1, maxLength: 255 }),
    sex: Type.String({ minLength: 1, maxLength: 20 }),
    placeOfBirth: Type.String({ minLength: 1, maxLength: 100 }),
    province: Type.String({ minLength: 1, maxLength: 100 }),
    city: Type.String({ minLength: 1, maxLength: 100 }),
    barangay: Type.String({ minLength: 1, maxLength: 100 }),
    zone: Type.Integer({ minimum: 1 }),
    district: Type.Integer({ minimum: 1 }),
    civilStatus: Type.String({ minLength: 1, maxLength: 20 }),
    zipCode: Type.Integer({ minimum: 1 }),
    nationality: Type.String({ minLength: 1, maxLength: 50 }),
    religion: Type.String({ minLength: 1, maxLength: 50 }),
    contactNumber: Type.String({ minLength: 1, maxLength: 20 }),
    mobileNumber: Type.String({ minLength: 1, maxLength: 20 }),
    height: Type.Number({ minimum: 0 }),
    weight: Type.Number({ minimum: 0 }),
    fatherName: Type.String({ minLength: 1, maxLength: 100 }),
    motherName: Type.String({ minLength: 1, maxLength: 100 }),
    guardianName: Type.String({ minLength: 1, maxLength: 100 }),
    motherOccupation: Type.String({ minLength: 1, maxLength: 100 }),
    fatherOccupation: Type.String({ minLength: 1, maxLength: 100 }),
    guardianRelationship: Type.String({ minLength: 1, maxLength: 50 }),
    motherContact: Type.String({ minLength: 1, maxLength: 20 }),
    fatherContact: Type.String({ minLength: 1, maxLength: 20 }),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' }))
});

type StudentInformationSchema = Static<typeof studentInformationSchema>;

export default studentInformationSchema; 