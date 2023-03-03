import Select from 'react-select';
import './ProductCustomizer.scss';

const ProductCustomizer = () => {
    const subCategories = [
        {label: 'Low calories', value: 'Low calories'},
        {label: 'Medium calories', value: 'Medium calories'},
        {label: 'Low IG', value: 'Low IG'},
        {label: 'Medium IG', value: 'Medium IG'},
        {label: 'Proteic', value: 'Proteic'},
        {label: 'Dairy', value: 'Dairy'},
        {label: 'Non dairy', value: 'Non dairy'},
        {label: 'Lactose free', value: 'Lactose free'}
    ];

    const customStyles = {
        border: 'none',
        appearence: 'none',
        width: 100
    }

    return (
        <div className='product-customizer-container'>
            {/* <p>customize your product</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8751 9.00001L11.9951 12.88L8.1151 9.00001C7.92827 8.81275 7.67462 8.70752 7.4101 8.70752C7.14558 8.70752 6.89193 8.81275 6.7051 9.00001C6.3151 9.39001 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.39001 17.2951 9.00001C16.9051 8.62001 16.2651 8.61001 15.8751 9.00001Z" fill="#2C2C2C" />
            </svg> */}
            <Select
                styles={customStyles} 
                options={subCategories} 
                isMulti    
            />
        </div>
    );
}

export default ProductCustomizer;