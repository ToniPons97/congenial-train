import './ProductDetails.scss';

import { useEffect, useState } from 'react';
import ProductDetailsGUI from '../ProductDetailsGUI/ProductDetailsGUI';

const ProductDetails = ({ productData = '' }) => {
    const productImagesSrc = ['slider-photo-example-1.png', 'slider-photo-example-2.png'];
    const [selectedImage, setSelectedImage] = useState(0);

    const handleSliderClick = (ev) => {
        const clickedElement = ev.target.tagName === 'svg' ? ev.target.parentNode
            : ev.target.tagName === 'path' ? ev.target.parentNode.parentNode
                : ev.target;

        if (clickedElement.classList[0] === 'slider-left')
            setSelectedImage(prev => (prev === 0 ? productImagesSrc.length - 1 : prev - 1) % productImagesSrc.length);
        else if (clickedElement.classList[0] === 'slider-right') 
            setSelectedImage(prev => (prev + 1) % productImagesSrc.length);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="product-details-main">
            <div className="product-details-container">
                <div className="product-details-slider">
                    <div onClick={handleSliderClick}>
                        {/* left slider arrow  */}
                        <div role='button' className='slider-left slider-btn'>
                            <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.2543 47.2838C37.1518 48.3863 35.3743 48.3863 34.2718 47.2838L15.5743 28.5863C14.6968 27.7088 14.6968 26.2913 15.5743 25.4138L34.2718 6.71628C35.3743 5.61378 37.1518 5.61378 38.2543 6.71628C39.3568 7.81878 39.3568 9.59628 38.2543 10.6988L21.9643 27.0113L38.2768 43.3238C39.3568 44.4038 39.3568 46.2038 38.2543 47.2838Z" fill="#2C2C2C" />
                            </svg>
                        </div>
                        {/* right slider arrow */}
                        <div role='button' className='slider-right slider-btn'>
                            <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7457 47.2838C16.8482 48.3863 18.6257 48.3863 19.7282 47.2838L38.4257 28.5863C39.3032 27.7088 39.3032 26.2913 38.4257 25.4138L19.7282 6.71628C18.6257 5.61378 16.8482 5.61378 15.7457 6.71628C14.6432 7.81878 14.6432 9.59628 15.7457 10.6988L32.0357 27.0113L15.7232 43.3238C14.6432 44.4038 14.6432 46.2038 15.7457 47.2838Z" fill="#2C2C2C" />
                            </svg>
                        </div>
                    </div>
                    <img
                        src={require('../../assets/images/' + productImagesSrc[selectedImage])}
                        alt='slider gelato.'
                    />
                </div>
                <div className="product-details-data">
                    <ProductDetailsGUI />
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;