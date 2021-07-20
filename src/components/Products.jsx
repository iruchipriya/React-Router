import React from 'react';
import { Route } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <header>
        <h1> Product </h1>
        <p> This is a Product Page</p>
      </header>

      <main>
        <ul>
          <li> P1 </li>
          <li> P2 </li>
          <li> P3 </li>
        </ul>
      </main>
    </>
  );
};

export default Products;
