import './SugarGelato.scss';
import sugarBanner from '../../assets/images/with-sugar-banner.png';
import ProductCustomizer from '../ProductCustomizer/ProductCustomizer';
import DiscoverLink from '../DiscoverLink/DiscoverLink';
import { useEffect } from 'react';
import Product from '../Product/Product';

const SugarGelato = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {id: 1, name: 'chocolate premium', imageName: 'sugar-chocolate.png'},
        {id: 2, name: 'cafe', imageName: 'sugar-cafe.png'},
        {id: 3, name: 'pistacho', imageName: 'sugar-pistacho.png'},
        {id: 4, name: 'uva', imageName: 'sugar-uva.png'},
        {id: 5, name: 'vainilla', imageName: 'sugar-vainilla.png'},
        {id: 6, name: 'caramelo', imageName: 'sugar-caramelo.png'},
    ]

    return (
        <main className='product-main'>
            <section className="with-product-main">
                <div className='with-product-container'>
                    <div className="category-description">
                        <div className='category-text-wrapper'>
                            <h2>with sugar</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
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
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <ProductCustomizer />
                </div>
                <div className='products-display'>
                    {
                        products.map(p => (<Product key={p.id} name={p.name} imageName={p.imageName} />))
                    }
                </div>
            </section>
            <div className='try-other-products'>
                <h4>prueba nuestros sabores especiales</h4>
                <DiscoverLink text='discover specials' to='/products/sugar-free' />
            </div>
        </main>
    );
}

export default SugarGelato;