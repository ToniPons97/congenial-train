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
    const allProducts: Product[] = await db.manyOrNone(`SELECT * FROM product`);
    res.status(200).json(allProducts);
}

const getAllSugarProducts = async (req: Request, res: Response) => {
    const sugarProducts: Product[] = await db.manyOrNone(`SELECT name,image,tags FROM product WHERE category_id=1`);
    res.status(200).json(sugarProducts);
}

const getAllSugarFreeProducts = async (req: Request, res: Response) => {
    const sugarFreeProducts: Product[] = await db.manyOrNone(`SELECT * FROM product WHERE category_id=2`);
    res.status(200).json(sugarFreeProducts);
}

const getSugarProductByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    const sugarProduct: Product | null = await db.oneOrNone(`SELECT * FROM product WHERE category_id=1 AND name=$1`, name);
    res.status(200).json(sugarProduct);
}

const getSugarFreeProductByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    const sugarProduct: Product | null = await db.oneOrNone(`SELECT * FROM product WHERE category_id=2 AND name=$1`, name);
    res.status(200).json(sugarProduct);
}




export {
    getAllProducts,
    getAllSugarProducts,
    getAllSugarFreeProducts,
    getSugarProductByName,
    getSugarFreeProductByName
}