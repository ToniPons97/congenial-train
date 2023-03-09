import './Product.scss';
import { Link } from "react-router-dom";

const Product = ({ name, imageName, subroute }) => {
    const imagesSugar = require.context(`../../assets/images/products/sugar`, true);
    const imagesSugarFree = require.context(`../../assets/images/products/sugar-free`, true);

    const imagePath = subroute === '/sugar' ? imagesSugar(`./${imageName}`) : imagesSugarFree(`./${imageName}`);

    return (
        <div className='product'>
            <img 
                src={imagePath} 
                alt={`${name} gelato.`} 
            />
            <Link to={`/flavors${subroute}/${name}`}>{name}</Link>
        </div>
    );
}

export default Product;