// console.log("hi there");

// step 1 - to initialize prisma
// npx prisma init

import 'dotenv/config'
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
    // create
    await client.user.create({
        data: {
            username: "paul atreidis",
            password: "paulatreidis",
            age: 21,
            city: "Dune"
        }
    })
    // delete
    // await client.user.delete({
    //     where: {
    //         id: 1
    //     }
    // })

    // Update
    // await client.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         username: "paulatreidis"
    //     }
    // })

    // Read - FindFirst({where: ---})
    

}

createUser();

// Relationships in Prisma

// prisma let's you define relationships to relate tables with each other

// types of relationships
// 1. One to One
// 2. One to Many
// 3. Many to One
// 4. Many to Many

