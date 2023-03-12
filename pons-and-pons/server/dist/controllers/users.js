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
import { jsonMessage } from '../jsonMessage.js';
import sha512 from 'js-sha512';
dotenv.config();
// Get all users (for debug purposes)
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db.manyOrNone(`SELECT * FROM users`);
    res.status(200).json(users);
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { full_name, email, password } = req.body;
    const user = yield db.oneOrNone(`SELECT * FROM users WHERE email=$1`, email);
    if (!user) {
        const hashedPassword = sha512.sha512(password);
        const { id } = yield db.one(`INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id`, [full_name, email, hashedPassword]);
        res.status(201).json(jsonMessage(`${id}: Account with email ${email} created successfully.`));
    }
    else {
        res.status(409).json(jsonMessage(`Email ${email} already in use.`));
    }
});
export { getAllUsers, signUp };
