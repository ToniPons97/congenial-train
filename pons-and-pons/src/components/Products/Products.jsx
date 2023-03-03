import './Products.scss';
import sugarBanner from '../../assets/images/with-sugar-banner.png';
import ProductCustomizer from '../ProductCustomizer/ProductCustomizer';
import DiscoverLink from '../DiscoverLink/DiscoverLink';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [ products, setProducts ] = useState([
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
            name: 'cafe', 
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
            name: 'uva', 
            imageName: 'sugar-uva.png',
            description: 'Whether enjoyed as a refreshing treat on a hot summer day or as a unique and flavorful addition to your dessert platter, our grape ice cream is a must-try. So take a scoop and enjoy the luscious and refreshing taste of our grape ice cream today.',
            category: 'sugar',
            tags: ['Low calories', 'Non dairy']
        },
        {
            id: 5, name: 'vainilla', 
            imageName: 'sugar-vainilla.png', 
            description: 'Indulge in the timeless and classic taste of our vanilla ice cream. Made with the finest quality Madagascar vanilla beans and fresh dairy cream, each scoop is a heavenly blend of smooth, creamy texture and rich, sweet vanilla flavor.',            
            category: 'sugar',
            tags: ['Proteic']
        },
        {
            id: 6, 
            name: 'caramelo', 
            imageName: 'sugar-caramelo.png',             
            description: 'Whether enjoyed on its own or as a delicious addition to your favorite desserts, our caramel ice cream is a treat that you won\'t be able to resist. So go ahead, indulge in the rich and buttery taste of our caramel ice cream, and satisfy your cravings today.',            
            category: 'sugar',
            tags: ['Lactose free']
        },
    ]);


    const [ tags, setTags ] = useState([]);
    const [ idProdsWithTags, setIdProdsWithTags ] = useState(() => new Set());
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const findProductsWithTags = () => {
        return products.filter(p => p.tags.forEach(pTag => {
            for (let t of tags) {
                console.log(`${t} === ${pTag}`);
                if (pTag === t)
                    setIdProdsWithTags(prev => new Set(prev).add(p.id));
                
            }
        }));
    }

    useEffect(() => {
        findProductsWithTags();
    }, [tags]);


    let commonProducts = [];
    useEffect(() => {
        if (idProdsWithTags.size > 0) {
            for (let id of idProdsWithTags) {
                setProducts(prev => products.filter(p => p.id === id));
                commonProducts.push(products.filter(p => p.id === id));
            }
            
            console.log(commonProducts);
            // idProdsWithTags.forEach(id => setProducts(prev => products.filter(p => p.id === id)));

        }
    }, [idProdsWithTags]);


    return (
        <main className='product-main'>
            <section className="with-product-main">
                <div className='with-product-container'>
                    <div className="category-description">
                        <div className='category-text-wrapper'>
                            <h2>with sugar</h2>
                            {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p> */}
                            <p>
                                Sweeten up your day with our sugar ice creams, available in a range of delicious flavors. Perfect for satisfying your sweet tooth cravings.                            
                            </p>
                        </div>
                    </div>
                    <div className="category-img-wrapper">
                        <img src={sugarBanner}></img>
                    </div>
                </div>
            </section>
            <section className='products-container'>
                <div className='products-selector'>
                    <div className='selector-text-wrapper'>
                        <h3>With Sugar</h3>
                        {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                        <p>each scoop is a sweet and creamy treat that will leave you wanting more.</p>
                    </div>
                    <ProductCustomizer setTags={setTags} />
                </div>
                <div className='products-display'>
                    {
                        products.map(p => (<Product key={p.id} name={p.name} imageName={p.imageName} />))
                    }
                </div>
            </section>
            <div className='try-other-products'>
                <h4>try our special flavors</h4>
                <DiscoverLink text='discover specials' to='/products/sugar-free' />
            </div>
        </main>
    );
}

export default Products;