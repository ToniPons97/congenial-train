import { Request, Response } from "express";
import db from '../db.js';

type Product = {
    id: number,
    name: string,
    imageName: string,
    description: string,
    category: string,
    tags: string
};

const getAllProducts = async (req: Request, res: Response) => {
    const allProducts: Product[] = await db.manyOrNone(`SELECT * FROM product WHERE category_id=1 OR category_id=2`);
    res.status(200).json(allProducts);
}

const getAllSugarProducts = async (req: Request, res: Response) => {
    const sugarProducts: Product[] = await db.manyOrNone(`SELECT * FROM product WHERE category_id=1`);
    console.log(sugarProducts);
    res.status(200).json(sugarProducts);
}

const getAllSugarFreeProducts = async (req: Request, res: Response) => {
    const sugarFreeProducts: Product[] = await db.manyOrNone(`SELECT * FROM product WHERE category_id=2`);
    res.status(200).json(sugarFreeProducts);
}

export {
    getAllProducts,
    getAllSugarProducts,
    getAllSugarFreeProducts
}