var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();
const { DB_USER, DB_NAME, DB_PORT } = process.env;
const db = pgPromise()(`postgres://${DB_USER}:postgres@localhost:${DB_PORT}/${DB_NAME}`);
const setupDb = () => __awaiter(void 0, void 0, void 0, function* () {
    // Creating category and product tables.
    yield db.none(`
        DROP TABLE IF EXISTS product_category;
        CREATE TABLE product_category (
            id SERIAL NOT NULL PRIMARY KEY,
            category_name TEXT NOT NULL
        );

        DROP TABLE IF EXISTS product;
        CREATE TABLE product (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            image TEXT,
            description TEXT NOT NULL,
            category_id integer NOT NULL,
            tags TEXT
        );
    `);
    // Inserting sugar and sugar-free into product_category.
    yield db.none(`INSERT INTO product_category (category_name) VALUES ('sugar');`);
    yield db.none(`INSERT INTO product_category (category_name) VALUES ('sugar-free');`);
    // Inserting some sugar dummy products
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('coffee', 
                'sugar-cafe.png', 
                'Wake up your taste buds with the bold and delicious flavor of our coffee ice cream. Made with premium coffee beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich coffee flavor and creamy goodness.', 
                1, 
                'Low IG, Proteic');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('chocolate', 
                'sugar-chocolate.png', 
                'Whether enjoyed on its own or paired with your favorite toppings, our chocolate gelato is a timeless classic that is sure to please any chocolate lover. So treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.',
                1, 
                'Low IG');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('pistachio', 
                'sugar-pistacho.png', 
                'Treat yourself to the rich and nutty flavor of our pistachio gelato. Made with real pistachio nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of pistachio bits.',
                1, 
                'Dairy, Medium IG');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('grape', 
                'sugar-uva.png', 
                'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our grape gelato is a must-try. So take a scoop and enjoy the luscious and refreshing taste of our grape gelato today.', 
                1, 
                'Low calories, Non dairy');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('vanilla', 
                'sugar-vainilla.png', 
                'Indulge in the timeless and classic taste of our vanilla gelato. Made with the finest quality Madagascar vanilla beans and fresh dairy cream, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet vanilla flavor.',
                1, 
                'Proteic');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('caramel', 
                'sugar-caramelo.png', 
                'Indulge in the exotic and rich taste of our caramel gelato. Made with love, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet caramel flavor.',
                1, 
                'Proteic, Medium calories');`);
    // Inserting some sugar free products
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('salted caramel', 
                'sugar-free-salted-caramel.png', 
                'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel gelato is a treat that you won''t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel gelato, and satisfy your cravings today.',
                2, 
                'Lactose free');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('mint', 
                'sugar-free-mint.png', 
                'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our mint gelato is a treat that you won''t be able to resist. So go ahead, indulge in the fresh taste of our mint ice cream, and satisfy your cravings today.',
                2, 
                'Lactose free');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('london fog', 
                'sugar-free-london-fog.png', 
                'Whether enjoyed on its own or paired with your favorite toppings, our london fog is a timeless classic that is sure to please any gelato lover. So treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.',
                2, 
                'Low IG, Proteic');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('brownie', 
                'sugar-free-brownie.png', 
                'Wake up your taste buds with the bold and delicious flavor of our brownie gelato. Made with premium cocoa beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich chocolate brownie flavor and creamy goodness.',
                2, 
                'Low IG');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('almond', 
                'sugar-free-almond.png', 
                'Treat yourself to the rich and nutty flavor of our almond gelato. Made with real almond nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of almond bits.',
                2, 
                'Dairy, Medium IG');`);
    yield db.none(`INSERT INTO product (name, image, description, category_id, tags) 
        VALUES ('blueberry pie', 
                'sugar-free-blueberry-pie.png', 
                'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our blueberry pie gelato is a must-try. So take a scoop and enjoy the luscious and refreshing taste of blueberry today.',
                2, 
                'Low calories, Non dairy');`);
});
setupDb();
export default db;
