// console.log("hi there");

// step 1 - to initialize prisma
// npx prisma init

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool);

const client = new PrismaClient({
    adapter,
})

async function createUser() {
    await client.user.create({
        data: {
            username: "paul atreidis",
            password: "paulatreidis",
            age: 21,
            city: "Dune"
        }
    })
}

createUser();

