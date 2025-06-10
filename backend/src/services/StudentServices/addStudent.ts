import { Prisma, PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";
import isExisting from "./isExisting.js";
import bcrypt from "bcryptjs";

async function addStudentService(prisma: PrismaClient) {
    return async function addStudent() {
        
    }
}