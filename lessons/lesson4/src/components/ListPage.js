import { Link } from "react-router-dom";
import React from "react";

function ListPage({ products }) {
  return (
    <div>
      <h2>List products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
                <Link to={`/products/${product.id}`}>{ product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
