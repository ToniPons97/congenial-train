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

    return (
        <div className='product-customizer-container'>
            <Select
                placeholder='customize your product'
                unstyled
                closeMenuOnSelect={false}
                styles={{
                    control: baseStyles => ({
                        ...baseStyles,
                        '&:hover': {
                            opacity: 0.6
                        }
                    }),
                    container: (baseStyles, state) => ({
                        ...baseStyles,
                        width: 'inherit',                        
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        borderBottom: '1px solid black',
                        padding: 10,
                        paddingLeft: 0,
                        '&:hover': {
                            opacity: 0.6,
                            cursor: 'pointer'
                        }
                    }),
                    multiValue: (baseStyles, state) => ({
                        ...baseStyles,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '3px',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        margin: '2px',
                        border: '1px solid rgba(0, 0, 0, 0.4)',
                        borderRadius: '10px',
                        '&:hover': {
                            opacity: 0.6,
                            cursor: 'pointer',
                            transition: 'opacity 0.3s'
                        },
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                        ...baseStyles,
                        position: 'relative',
                        bottom: '2.5px',
                        marginLeft: '3px'
                    }),
                    dropdownIndicator: (baseStyles, state) => ({
                        ...baseStyles,
                        transition: 'transform .2s ease',
                        transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : null
                    }),
                }}

                options={subCategories} 
                isMulti
            />
        </div>
    );
}

export default ProductCustomizer;