import React from 'react';
import { Route } from 'react-router-dom';
import './style.css';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

import MainHeader from './components/MainHeader';

export default function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>

      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>

        {/* FOR DYNAMIC ROUTING */}
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

//our-domain.com/welcome => welcome component
