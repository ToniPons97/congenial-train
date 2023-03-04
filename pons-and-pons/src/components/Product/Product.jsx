import './Product.scss';
import { Link } from "react-router-dom";

const Product = ({ name, imageName, subroute }) => {
    return (
        <div className='product'>
            <img src={require('../../assets/images/' + imageName)} alt={`${name} gelato.`} />
            <Link to={`/flavors${subroute}/${name}`}>{name}</Link>
        </div>
    );
}

export default Product;