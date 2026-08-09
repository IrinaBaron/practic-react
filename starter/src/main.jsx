// import React from 'react';
import ReactDOM from 'react-dom/client';

import { products } from './products';
import { ProductList } from './widgets/ProductList';

import './main.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('products-list'));

// TODO: Реализовать компонент ProductList
reactRoot.render(<ProductList products={products} />);

// function syncTermList() {
//     reactRoot.render(<ProductList products={products} />)
// }