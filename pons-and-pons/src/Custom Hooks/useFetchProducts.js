import { useState, useEffect } from "react";


export const useFetchProducts = async (category = '') => {
    const [ products, setProducts ] = useState([]);
    
    const fetchProducts = async (category) => {
        if (category === '/sugar' || category === '/sugar-free') {
            const apiBaseUrl = `http://localhost:5000/api/products${category}`;
            const response = await fetch(apiBaseUrl);
            const products = await response.json();
            setProducts(products);
        }
    }

    useEffect(() => {
        fetchProducts(category);
    }, []);

    // useEffect(() => {
    //     console.log(products);
    // }, [products])

    return {
        products
    }
}