import React from "react";
import { useDispatch } from "react-redux"
import { addFavorite } from "./favoriteSlicer";

const ProductList = ({ products }) => {
    
    const dispacth = useDispatch();

    const handleAddToFavorite = (product) => {
        dispacth(addFavorite(product));
    }

    return (
        <div>
            <h2>All products</h2>
            <ul>
                {products.map((product) => (
                <li key={product.id}>
                    <div>{product.name}: {product.price}</div>
                    <button onClick={() => handleAddToFavorite(product)}>Add to favorite</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
