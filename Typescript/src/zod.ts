// Type Inference in zod

import { z } from 'zod';
import express from "express";

const app = express();

// Define schema for profile update

const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "You must be atleast 18 years old"}).optional()
});

app.put('/user', (req, res)=> {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body;

    if(!success) {
        res.status(411).json({});
        return
    }

    res.json({
        message: "User Updated"
    })
});

app.listen(3000);
