import { useParams } from "react-router-dom";
import React from "react";
function DetailPage({ products }) {
  let { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  if (!product) {
    return <div>Page not found</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.disription}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default DetailPage;
