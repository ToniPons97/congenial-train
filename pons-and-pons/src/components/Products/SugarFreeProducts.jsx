import './Products.scss';
import sugarBanner from '../../assets/images/sugar-free-banner.png';
import ProductCustomizer from '../ProductCustomizer/ProductCustomizer';
import DiscoverLink from '../DiscoverLink/DiscoverLink';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useLocation } from 'react-router-dom';

const SugarFreeProducts = () => {
    const location = useLocation();
    const currentSubroute = location.pathname.slice(location.pathname.lastIndexOf('/'), location.pathname.length);

    const [ products, setProducts ] = useState([]);

    const fetchProducts = async (category) => {
        if (category === '/sugar' || category === '/sugar-free') {
            const apiBaseUrl = `http://localhost:5000/api/products${category}`;
            const response = await fetch(apiBaseUrl);
            const products = await response.json();
            setProducts(products);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    useEffect(() => {
        fetchProducts(currentSubroute);
        console.log(currentSubroute);
    }, []);

    const [ tags, setTags ] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const findProductsWithTags = () => {
        if (tags.length) {
            const prodsFromStorage = JSON.parse(localStorage.getItem('products'));
            let filteredProducts = prodsFromStorage.filter(p => tags.every(f => p.tags.includes(f)));
            setProducts(prev => filteredProducts);
        } else {
            const prodsFromStorage = JSON.parse(localStorage.getItem('products'));
            setProducts(prev => prodsFromStorage);
        }
    }

    useEffect(() => {
        findProductsWithTags();
    }, [tags]);



    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        // console.log(images['sugar-free/sugar-free-salted-caramel.png']);
        console.log(images);
        return images;
    }


    const imagesSF = importAll(require.context(`../../assets/images/products/sugar-free`, false, /\.png$/));


    const cleanSubroute = currentSubroute.slice(1, currentSubroute.length);
    console.log('this is sugar free');

    return (
        <main className='product-main'>
            <section className="with-product-main">
                <div className='with-product-container'>
                    <div className="category-description">
                        <div className='category-text-wrapper'>
                            <h2>sugar free</h2>
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
            {
                products &&
                <section className='products-container'>
                <div className='products-selector'>
                    <div className='selector-text-wrapper'>
                        <h3>sugar free</h3>
                        <p>each scoop is a sweet and creamy treat that will leave you wanting more.</p>
                    </div>
                    <ProductCustomizer setTags={setTags} />
                </div>
                <div className='products-display'>
                    {
                        products.map(p => 
                            (<Product 
                                key={p.id} 
                                name={p.name} 
                                image={imagesSF[p.image]} 
                                subroute={currentSubroute}     
                            />))
                    }
                    {!products.length && <p>0 products match this description.</p>}
                </div>
            </section>
            }
            <div className='try-other-products'>
                <h4>try our special flavors</h4>
                <DiscoverLink text='discover classics' to='/flavors/sugar' />
            </div>
        </main>
    );
}

export default SugarFreeProducts;