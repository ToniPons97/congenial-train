import './Product.scss';
import { Link } from "react-router-dom";

const Product = ({ name, imageName }) => {
    return (
        <div className='product'>
            <img src={require('../../assets/images/' + imageName)} alt={`${name} gelato.`} />
            <Link to={'/flavors/' + name}>{name}</Link>
        </div>
    );
}

export default Product;