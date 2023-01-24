import React, { useState } from "react";
import uuid from 'react-uuid';
import Products from "./Products";
import ProductField from "./ProductField";

function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
  return <div data-id={id}>
    name: <ProductField id={id}
          text={name}
          type="name"
          isEdit={isEdit}
          editProd={editProd}
          />
    cost: <ProductField 
          id={id}
          text={cost}
          type="cost"
          isEdit={isEdit}
          editProd={editProd}
          />
    {/* <span>{inCart ? 'in cart' : 'not in cart'}</span>
    <button onClick={() => addToCart(id)}>to cart</button> */}

    <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit' }</button>
  </div>
}

export default Product