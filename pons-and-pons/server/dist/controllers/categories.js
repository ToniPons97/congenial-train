var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from "../db.js";
const getCategoryIdFromName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const categoryId = yield db.oneOrNone(`SELECT id FROM product_category WHERE category_name=$1`, name);
    res.status(200).json(categoryId);
});
export { getCategoryIdFromName };
