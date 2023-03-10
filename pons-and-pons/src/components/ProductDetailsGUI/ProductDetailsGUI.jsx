import { useState } from 'react';
import NutritionFactsTable from '../NutritionFactsTable/NutritionFactsTable';
import RippleButton from '../RippleButton/RippleButton';
import './ProductDetailsGUI.scss';

const ProductDetailsGUI = ({ productData }) => {
    const [selectedTab, setSelectedTab] = useState('flavor');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(29);

    const gelatoData = {
        flavor: <p>{productData.description}</p>,
        ingredients: <p>
                            Water, coconut cream, xylitol, chocolate ripple (10.3%) (water, polydextrose, glycerine, inulin, 
                            cacao powder (7%), modified corn starch, xanthan gum, natural flavour, lactic acid, salt, steviol glycoside),
                            cream (milk), milk solids, banana puree (3.4%), peanuts (3.4%), carob germ flour, inulin, tapioca starch, 
                            emulsifiers (477, 471), guar gum, carrageenan, natural flavours, annotto extract.
                            <br />
                            <strong>Contains</strong>: Milk & peanut.
                            <br />
                            <strong>May contain</strong>: Egg, soy, hazelnut, macadamia & almond.
                            Excess consumption may have a laxative effect.
                     </p>,
        'nutrition facts': <NutritionFactsTable />
    }
    
    
    
    const handleTabCLick = (ev) => {
        const element = ev.target;
        const active = 'active-tab';
        const text = ev.target.textContent;

        if (!element.classList.contains(active)) {
            element.classList += ` ${active}`;

            for (let tab of document.querySelectorAll(`.${active}`))
                if (tab.textContent !== text)
                    tab.classList.remove(active);

            setSelectedTab(prev => text);
        }
    }

    const handleQuantity = (ev) => {
        if (ev.target.textContent === '-' && quantity > 1)
            setQuantity(prev => prev - 1);
        else if (ev.target.textContent === '+')
            setQuantity(prev => prev + 1);
    }

    const prices = {
        small: 29,
        medium: 39,
        large: 40
    }

    const handleSizeSelection = (ev) => {
        setTotalPrice(prev => prices[ev.target.value]);
    }

    return (
        <div className='product-data-container'>
            <div className='product-tabs'>
                <div onClick={handleTabCLick} className='active-tab'>flavor</div>
                <div onClick={handleTabCLick}>ingredients</div>
                <div onClick={handleTabCLick}>nutrition facts</div>
            </div>
            { selectedTab === 'flavor' ? (
                <>
                    <h3>{productData.name}</h3>
                    <p>{productData.tags}</p>
                </>
                ) : ''
            }
           
            <div style={selectedTab === 'flavor' ? {borderTop:'1px solid #2c2c2cd3'} : {}} className='product-details-middle'>
                { gelatoData[selectedTab] }
                <div className='product-size'>
                    <h4>size</h4>
                    <fieldset onChange={handleSizeSelection}>
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
                        <div onClick={handleQuantity} role='button'>-</div>
                        <p className='quantity-display'>{quantity}</p>
                        <div onClick={handleQuantity} role='button'>+</div>
                    </div>
                </div>
            </div>
            <div className='product-total-price'>
                <h5>total: ${totalPrice * quantity}</h5>
                <RippleButton>add to cart</RippleButton>
            </div>
        </div>
    );
}

export default ProductDetailsGUI;