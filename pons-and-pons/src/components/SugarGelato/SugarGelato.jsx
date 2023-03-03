import './SugarGelato.scss';
import sugarBanner from '../../assets/images/with-sugar-banner.png';

import sugarChoco from '../../assets/images/sugar-chocolate.png';
import sugarCafe from '../../assets/images/sugar-cafe.png';
import sugarPistacho from '../../assets/images/sugar-pistacho.png';
import sugarUva from '../../assets/images/sugar-uva.png';
import sugarVainilla from '../../assets/images/sugar-vainilla.png';
import sugarCaramelo from '../../assets/images/sugar-caramelo.png';
import { Link } from 'react-router-dom';
import ProductCustomizer from '../ProductCustomizer/ProductCustomizer';

const SugarGelato = () => {
    return (
        <main>
            <section className="with-sugar-main">
                <div className='with-sugar-container'>
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
            <section className='sugar-products-container'>
                <div className='products-selector'>
                    <div className='selector-text-wrapper'>
                        <h3>With Sugar</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <ProductCustomizer />
                </div>
                <div className='products-display'>
                    <div className='sugar-product'>
                        <img src={sugarChoco} />
                        <Link>chocolate premium</Link>
                    </div>
                    <div className='sugar-product'>
                        <img src={sugarCafe} />
                        <Link>cafe</Link>
                    </div>
                    <div className='sugar-product'>
                        <img src={sugarPistacho} />
                        <Link>pistacho</Link>
                    </div>
                    <div className='sugar-product'>
                        <img src={sugarUva} />
                        <Link>uva</Link>
                    </div>
                    <div className='sugar-product'>
                        <img src={sugarVainilla} />
                        <Link>vainilla</Link>
                    </div>
                    <div className='sugar-product'>
                        <img src={sugarCaramelo} />
                        <Link>caramelo</Link>
                    </div>
                </div>
            </section>
            <div className='try-other-products'>
                <h4>prueba nuestros sabores especiales</h4>
                <a>DISCOVER SPECIALS</a>
            </div>
        </main>
    );
}

export default SugarGelato;