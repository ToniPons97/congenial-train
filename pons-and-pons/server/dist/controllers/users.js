var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from '../db.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { jsonMessage } from '../jsonMessage.js';
import sha512 from 'js-sha512';
import Joi from 'joi';
dotenv.config();
const userSchema = Joi.object({
    id: Joi.number().integer().required(),
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});
// Get all users (for debug purposes)
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db.manyOrNone(`SELECT * FROM users`);
    res.status(200).json(users);
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password);
    const user = yield db.oneOrNone(`SELECT * FROM users WHERE email = $1`, email);
    if (!user) {
        const hashedPassword = sha512.sha512(password);
        const { id } = yield db.one(`INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id`, [fullName, email, hashedPassword]);
        res.status(201).json(jsonMessage(`${id}: Account with email ${email} created successfully.`));
    }
    else {
        res.status(409).json(jsonMessage(`Email ${email} already in use.`));
    }
});
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield db.oneOrNone(`SELECT * from users WHERE email = $1`, email);
    if ((user === null || user === void 0 ? void 0 : user.password) === sha512.sha512(password)) {
        const payload = { id: user.id, email };
        const SECRET = process.env.SECRET;
        const token = jwt.sign(payload, SECRET);
        yield db.none(`UPDATE users SET token = $2 WHERE id = $1`, [user.id, token]);
        res.status(200).json({ email, token });
    }
    else {
        res.status(404).json(jsonMessage('Incorrect email or password.'));
    }
});
const signOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log('USER: ' + user);
    yield db.none(`UPDATE users SET token = NULL WHERE id = $1`, user === null || user === void 0 ? void 0 : user.id);
    res.status(200).json(jsonMessage('Logout successfully.'));
});
// This endpoint will only serve the user's email. 
// Later it has to serve all extra user info: 
// Billing address, shipping address, phone number, payment methods (credit cards...)
// Previous and current orders.
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const fullName = yield db.oneOrNone(`SELECT full_name FROM users WHERE id = $1`, user === null || user === void 0 ? void 0 : user.id);
    if (fullName)
        res.status(200).json(jsonMessage(fullName));
    else
        res.status(404).json(jsonMessage('User not found.'));
});
export { getAllUsers, signUp, signIn, signOut, getUserData };
