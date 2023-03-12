import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import 'express-async-errors';
import cors from 'cors';
import { 
        getAllProducts, 
        getAllSugarFreeProducts, 
        getAllSugarProducts, 
        getSugarProductByName, 
        getSugarFreeProductByName 
    } from "./controllers/products.js";
import { getAllUsers, signUp } from "./controllers/users.js";

dotenv.config();

const { PORT } = process.env;

type JsonResponse = { msg: string };
const jsonMessage = (msg: string): JsonResponse => ({msg});

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json(jsonMessage('Server up! Cool!'));
});

// Get all products
app.get('/api/products', getAllProducts);

// Get all sugar products
app.get('/api/products/sugar', getAllSugarProducts);

// Get sugar product by name
app.get('/api/products/sugar/:name', getSugarProductByName);

// Get sugar free product by name
app.get('/api/products/sugar-free/:name', getSugarFreeProductByName);

// Get all sugar free products
app.get('/api/products/sugar-free', getAllSugarFreeProducts);

// Get all users
app.get('/api/users', getAllUsers);

// User signup
app.post('/api/users/signup', signUp);



app.listen(PORT);