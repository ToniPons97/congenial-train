import './ProductDetails.scss';

import sliderPhotoExample1 from '../../assets/images/slider-photo-example-1.png'
import { useEffect } from 'react';

const ProductDetails = ({ productData = '' }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="product-details-main">
            <div className="product-details-container">
                <div className="product-details-slider">
                    {/* left slider arrow  */}
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.2543 47.2838C37.1518 48.3863 35.3743 48.3863 34.2718 47.2838L15.5743 28.5863C14.6968 27.7088 14.6968 26.2913 15.5743 25.4138L34.2718 6.71628C35.3743 5.61378 37.1518 5.61378 38.2543 6.71628C39.3568 7.81878 39.3568 9.59628 38.2543 10.6988L21.9643 27.0113L38.2768 43.3238C39.3568 44.4038 39.3568 46.2038 38.2543 47.2838Z" fill="#2C2C2C" />
                    </svg>
                    {/* right slider arrow */}
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7457 47.2838C16.8482 48.3863 18.6257 48.3863 19.7282 47.2838L38.4257 28.5863C39.3032 27.7088 39.3032 26.2913 38.4257 25.4138L19.7282 6.71628C18.6257 5.61378 16.8482 5.61378 15.7457 6.71628C14.6432 7.81878 14.6432 9.59628 15.7457 10.6988L32.0357 27.0113L15.7232 43.3238C14.6432 44.4038 14.6432 46.2038 15.7457 47.2838Z" fill="#2C2C2C" />
                    </svg>
                    <img src={sliderPhotoExample1} alt='slider gelato example 1' />

                </div>
                <div className="product-details-data">
                    <div className='product-data-container'>
                        <div className='product-tabs'>
                            <div className='active-tab'>flavor</div>
                            <div>ingredients</div>
                            <div>nutrition facts</div>
                        </div>
                        <h3>chocolate</h3>
                        <p>Low IG. Proteic</p>
                        <div className='product-details-middle'>
                            <p>Whether enjoyed on its own or paired with your favorite toppings, treat yourself to a scoop (or two!) of our delicious chocolate ice cream, and savor the indulgence.</p>
                            <div className='product-size'>
                                <h4>size</h4>
                                <fieldset>
                                    <div>
                                        <input id='small' type='radio' name='size' value='small' />
                                        <label htmlFor='small'>250 ml - $29.00</label>
                                    </div>
                                    <div>
                                        <input id='medium' type='radio' name='size' value='medium' />
                                        <label htmlFor='medium'>500 ml - € 39.00</label>
                                    </div>
                                    <div>
                                        <input id='large' type='radio' name='size' value='large' />
                                        <label htmlFor='large' type='radio'>1 litro - € 40.00</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className='product-quantity'>
                                <h4>quantity</h4>

                                <div className='product-quantity-selector'>
                                    <div role='button'>-</div>
                                    <p className='quantity-display'>1</p>
                                    <div role='button'>+</div>
                                </div>
                            </div>
                        </div>
                        <div className='product-total-price'>
                            <h5>total: $29.00</h5>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;