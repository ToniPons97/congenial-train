import './Product.scss';
import { Link } from "react-router-dom";

const Product = ({ name, image, subroute }) => {
    return (
        <div className='product'>
            {
                <img 
                    src={image} 
                    alt={`${name} gelato.`} 
                />
            }
            <Link to={`/flavors${subroute}/${name}`}>{name}</Link>
        </div>
    );
}

export default Product;