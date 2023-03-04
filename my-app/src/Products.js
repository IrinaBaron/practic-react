import React, { useState } from "react";
import uuid from 'react-uuid';
import Product from "./Product";
import ProductField from "./ProductField";

function id() {
  return uuid()
}
const initProds = [
	{id: id(), name: 'product1', cost: 100, inCart: false},
	{id: id(), name: 'product2', cost: 200, inCart: false},
	{id: id(), name: 'product3', cost: 300, inCart: false},
];

function Products() {
  const [prods, setProds] = useState(initProds);

  function changeField(id, field, event) {
		setProds(prods.map(prod => {
			if (prod.id == id) {
				prod[field] = event.target.value;
			}
			
			return prod;
		}));
	}

  function toggleMode(id) {
    setProds(prods.map(prod => {
      if (prod.id === id) {
        prod.isEdit = !prod.isEdit;
      }
      
      return prod;
    }));
  }

  function editProd(id, field, event) {
    setProds(prods.map(prod => {
      if (prod.id === id) {
        prod[field] = event.target.value;
      }
      
      return prod;
    }));
  }

  function addToCart(id) {
    setProds(prods.map(prod => {
      if (prod.id === id) {
        prod.inCart = true;
      }
      
      return prod;
    }));
  }
	
	const items = prods.map(prod => {
		return <Product 
    key      ={prod.id}
		id       ={prod.id}
		name     ={prod.name}
		cost     ={prod.cost}
		isEdit   ={prod.isEdit}
    inCart={prod.inCart}
		toggleMode={toggleMode}
    editProd={editProd}
    changeField={changeField}
    />
	});
	
	return <div>
		{items}
	</div>;
}




export default Products