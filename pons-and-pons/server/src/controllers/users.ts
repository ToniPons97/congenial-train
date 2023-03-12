import db from '../db.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { jsonMessage } from '../jsonMessage.js';
import sha512 from 'js-sha512';

dotenv.config()

type User = {
    id: number,
    full_name: string,
    email: string,
    password: string
}

// Get all users (for debug purposes)
const getAllUsers = async (req: Request, res: Response) => {
    const users: User[] = await db.manyOrNone(`SELECT * FROM users`);
    res.status(200).json(users);
}

const signUp = async (req: Request, res: Response) => {
    const { full_name, email, password } = req.body;

    const user: User | undefined | null = await db.oneOrNone(`SELECT * FROM users WHERE email=$1`, email);

    if (!user) {
        const hashedPassword = sha512.sha512(password);
        const { id } =
            await db.one(`INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id`,
                [full_name, email, hashedPassword]);
        res.status(201).json(jsonMessage(`${id}: Account with email ${email} created successfully.`));
    } else {
        res.status(409).json(jsonMessage(`Email ${email} already in use.`));
    }
}

export {
    getAllUsers,
    signUp
}