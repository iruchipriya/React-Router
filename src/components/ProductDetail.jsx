import React from 'react';
import { Route, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.producId);
  return (
    <>
      <header>
        <h1> Product Detail </h1>
        <p>{params.productId} </p>
      </header>
    </>
  );
};

export default ProductDetail;
