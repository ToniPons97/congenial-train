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
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield db.manyOrNone(`SELECT * FROM product WHERE category_id=1 OR category_id=2`);
    res.status(200).json(allProducts);
});
const getAllSugarProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sugarProducts = yield db.manyOrNone(`SELECT * FROM product WHERE category_id=1`);
    console.log(sugarProducts);
    res.status(200).json(sugarProducts);
});
const getAllSugarFreeProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sugarFreeProducts = yield db.manyOrNone(`SELECT * FROM product WHERE category_id=2`);
    res.status(200).json(sugarFreeProducts);
});
export { getAllProducts, getAllSugarProducts, getAllSugarFreeProducts };
