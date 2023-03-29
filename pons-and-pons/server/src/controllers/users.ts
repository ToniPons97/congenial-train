import db from '../db.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { jsonMessage } from '../jsonMessage.js';
import sha512 from 'js-sha512';
import Joi from 'joi';

dotenv.config()

type User = {
    id: number,
    fullName: string,
    email: string,
    password: string
}

const userSchema = Joi.object({
    id: Joi.number().integer().required(),
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

// Get all users (for debug purposes)
const getAllUsers = async (req: Request, res: Response) => {
    const users: User[] = await db.manyOrNone(`SELECT * FROM users`);
    res.status(200).json(users);
}

const signUp = async (req: Request, res: Response) => {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password);

    const user: User | undefined | null = await db.oneOrNone(`SELECT * FROM users WHERE email = $1`, email);
    if (!user) {
        const hashedPassword = sha512.sha512(password);
        const { id } = 
            await db.one(`INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id`, 
                [fullName, email, hashedPassword]);
        res.status(201).json(jsonMessage(`${id}: Account with email ${email} created successfully.`));
    } else {
        res.status(409).json(jsonMessage(`Email ${email} already in use.`));
    }
}

const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await db.oneOrNone(`SELECT * from users WHERE email = $1`, email);
    if (user?.password === sha512.sha512(password)) {
        const payload = { id: user.id, email };

        const SECRET: any = process.env.SECRET;
        const token = jwt.sign(payload, SECRET);

        await db.none(`UPDATE users SET token = $2 WHERE id = $1`, [user.id, token]);
        res.status(200).json({email, token});
    } else {
        res.status(404).json(jsonMessage('Incorrect email or password.'));
    }
}

const signOut = async (req: Request, res: Response) => {
    const user: any = req.user;

    console.log('USER: ' + user);

    await db.none(`UPDATE users SET token = NULL WHERE id = $1`, user?.id);
    res.status(200).json(jsonMessage('Logout successfully.'));
}

// This endpoint will only serve the user's email. 
// Later it has to serve all extra user info: 
// Billing address, shipping address, phone number, payment methods (credit cards...)
// Previous and current orders.
const getUserData = async (req: Request, res: Response) => {
    const user: any = req.user;

    const fullName: string | null = await db.oneOrNone(`SELECT full_name FROM users WHERE id = $1`, user?.id);

    if (fullName)
        res.status(200).json(jsonMessage(fullName));
    else 
        res.status(404).json(jsonMessage('User not found.'));

}

export {
    getAllUsers,
    signUp,
    signIn,
    signOut,
    getUserData
}