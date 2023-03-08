let products = [
    {
        id: 1,
        name: 'chocolate',
        imageName: 'sugar-chocolate.png',
        description: 'Whether enjoyed on its own or paired with your favorite toppings, our chocolate ice cream is a timeless classic that is sure to please any chocolate lover. So treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.',
        category: 'sugar',
        tags: ['Low IG', 'Proteic']
    },
    {
        id: 2,
        name: 'cofee',
        imageName: 'sugar-cafe.png',
        description: 'Wake up your taste buds with the bold and delicious flavor of our coffee ice cream. Made with premium coffee beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich coffee flavor and creamy goodness.',
        category: 'sugar',
        tags: ['Low IG']
    },
    {
        id: 3,
        name: 'pistacho',
        imageName: 'sugar-pistacho.png',
        description: 'Treat yourself to the rich and nutty flavor of our pistachio ice cream. Made with real pistachio nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of pistachio bits.',
        category: 'sugar',
        tags: ['Dairy', 'Medium IG']
    },
    {
        id: 4,
        name: 'grape',
        imageName: 'sugar-uva.png',
        description: 'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our grape ice cream is a must-try. So take a scoop and enjoy the luscious and refreshing taste of our grape ice cream today.',
        category: 'sugar',
        tags: ['Low calories', 'Non dairy']
    },
    {
        id: 5, name: 'vanilla',
        imageName: 'sugar-vainilla.png',
        description: 'Indulge in the timeless and classic taste of our vanilla ice cream. Made with the finest quality Madagascar vanilla beans and fresh dairy cream, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet vanilla flavor.',
        category: 'sugar',
        tags: ['Proteic']
    },
    {
        id: 7,
        name: 'caramel',
        imageName: 'sugar-caramelo.png',
        description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel ice cream is a treat that you won\'t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel ice cream, and satisfy your cravings today.',
        category: 'sugar',
        tags: ['Lactose free']
    },
    {
        id: 8,
        name: 'caramel',
        imageName: 'sugar-caramelo.png',
        description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel ice cream is a treat that you won\'t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel ice cream, and satisfy your cravings today.',
        category: 'sugar-free',
        tags: ['Lactose free']
    },
    {
        id: 9,
        name: 'vanilla',
        imageName: 'sugar-caramelo.png',
        description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel ice cream is a treat that you won\'t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel ice cream, and satisfy your cravings today.',
        category: 'sugar-free',
        tags: ['Lactose free']
    },
    {
        id: 10,
        name: 'chocolate',
        imageName: 'sugar-chocolate.png',
        description: 'Whether enjoyed on its own or paired with your favorite toppings, our chocolate ice cream is a timeless classic that is sure to please any chocolate lover. So treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.',
        category: 'sugar-free',
        tags: ['Low IG', 'Proteic']
    },
    {
        id: 11,
        name: 'cofee',
        imageName: 'sugar-cafe.png',
        description: 'Wake up your taste buds with the bold and delicious flavor of our coffee ice cream. Made with premium coffee beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich coffee flavor and creamy goodness.',
        category: 'sugar-free',
        tags: ['Low IG']
    },
    {
        id: 12,
        name: 'pistacho',
        imageName: 'sugar-pistacho.png',
        description: 'Treat yourself to the rich and nutty flavor of our pistachio ice cream. Made with real pistachio nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of pistachio bits.',
        category: 'sugar-free',
        tags: ['Dairy', 'Medium IG']
    },
    {
        id: 13,
        name: 'grape',
        imageName: 'sugar-uva.png',
        description: 'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our grape ice cream is a must-try. So take a scoop and enjoy the luscious and refreshing taste of our grape ice cream today.',
        category: 'sugar-free',
        tags: ['Low calories', 'Non dairy']
    }
];
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};
const getAllSugarProducts = (req, res) => {
    const sugarProducts = products.filter(p => p.category === 'sugar');
    res.status(200).json(sugarProducts);
};
const getAllSugarFreeProducts = (req, res) => {
    const sugarFreeProducts = products.filter(p => p.category === 'sugar-free');
    res.status(200).json(sugarFreeProducts);
};
export { getAllProducts, getAllSugarProducts, getAllSugarFreeProducts };
