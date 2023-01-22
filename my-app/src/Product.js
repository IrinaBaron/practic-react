import React, { useState } from "react";
import uuid from 'react-uuid';

function id() {
  return uuid()
}
const initProds = [
	{id: id(), name: 'product1', cost: 100},
	{id: id(), name: 'product2', cost: 200},
	{id: id(), name: 'product3', cost: 300},
];

function Products() {
  const [prods, setProds] = useState(initProds);
	
	const items = prods.map(prod => {
		return <Product 
      key={prod.id}
      id={prod.id}
      name={prod.name}
      cost={prod.cost}
    />
	});
	
	return <div>
		{items}
	</div>;
}

function Product({ id, name, cost}) {
  return <div data-id={id}>
    name: <span>{name}</span>
    cost: <span>{cost}</span>
  </div>
}

export default Products