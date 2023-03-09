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
        name: 'coffee',
        imageName: 'sugar-cafe.png',
        description: 'Wake up your taste buds with the bold and delicious flavor of our coffee ice cream. Made with premium coffee beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich coffee flavor and creamy goodness.',
        category: 'sugar',
        tags: ['Low IG']
    },
    {
        id: 3,
        name: 'pistachio',
        imageName: 'sugar-pistacho.png',
        description: 'Treat yourself to the rich and nutty flavor of our pistachio ice cream. Made with real pistachio nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of pistachio bits.',
        category: 'sugar',
        tags: ['Dairy', 'Medium IG']
    },
    {
        id: 4,
        name: 'grape',
        imageName: 'sugar-uva.png',
        description: 'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our grape ice cream is a must-try. So take a scoop and enjoy the luscious and refreshing taste of our grape gelato today.',
        category: 'sugar',
        tags: ['Low calories', 'Non dairy']
    },
    {
        id: 5, name: 'vanilla',
        imageName: 'sugar-vainilla.png',
        description: 'Indulge in the timeless and classic taste of our vanilla gelato. Made with the finest quality Madagascar vanilla beans and fresh dairy cream, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet vanilla flavor.',
        category: 'sugar',
        tags: ['Proteic']
    },
    {
        id: 6, name: 'caramel',
        imageName: 'sugar-caramelo.png',
        description: 'Indulge in the timeless and classic taste of our vanilla gelato. Made with the finest quality Madagascar vanilla beans and fresh dairy cream, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet vanilla flavor.',
        category: 'sugar',
        tags: ['Proteic']
    },
    {
        id: 7,
        name: 'salted caramel',
        imageName: 'sugar-free-salted-caramel.png',
        description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel gelato is a treat that you won\'t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel gelato, and satisfy your cravings today.',
        category: 'sugar-free',
        tags: ['Lactose free']
    },
    {
        id: 8,
        name: 'mint',
        imageName: 'sugar-free-mint.png',
        description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our mint gelato is a treat that you won\'t be able to resist. So go ahead, indulge in the fresh taste of our mint ice cream, and satisfy your cravings today.',
        category: 'sugar-free',
        tags: ['Lactose free']
    },
    {
        id: 9,
        name: 'london fog',
        imageName: 'sugar-free-london-fog.png',
        description: 'Whether enjoyed on its own or paired with your favorite toppings, our london fog is a timeless classic that is sure to please any gelato lover. So treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.',
        category: 'sugar-free',
        tags: ['Low IG', 'Proteic']
    },
    {
        id: 10,
        name: 'brownie',
        imageName: 'sugar-free-brownie.png',
        description: 'Wake up your taste buds with the bold and delicious flavor of our brownie gelato. Made with premium coffee beans and the finest quality dairy cream, each spoonful is a heavenly blend of rich coffee flavor and creamy goodness.',
        category: 'sugar-free',
        tags: ['Low IG']
    },
    {
        id: 11,
        name: 'almond',
        imageName: 'sugar-free-almond.png',
        description: 'Treat yourself to the rich and nutty flavor of our almond gelato. Made with real almond nuts and the finest quality dairy cream, each scoop is a delightful combination of smooth and creamy texture with a satisfying crunch of almond bits.',
        category: 'sugar-free',
        tags: ['Dairy', 'Medium IG']
    },
    {
        id: 12,
        name: 'blueberry pie',
        imageName: 'sugar-free-blueberry-pie.png',
        description: 'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our blueberry pie gelato is a must-try. So take a scoop and enjoy the luscious and refreshing taste of blueberry today.',
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
