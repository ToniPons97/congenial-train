import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import 'express-async-errors';
import cors from 'cors';
import { getAllProducts, getAllSugarFreeProducts, getAllSugarProducts } from "./controllers/products.js";
dotenv.config();
const { PORT } = process.env;
const jsonMessage = (msg) => ({ msg });
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
// Get all sugar free products
app.get('/api/products/sugar-free', getAllSugarFreeProducts);
app.listen(PORT);
