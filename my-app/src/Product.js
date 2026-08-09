import React, { useState } from "react";
import uuid from 'react-uuid';
import Products from "./Products";
import ProductField from "./ProductField";

function Product({ id, name, cost, isEdit, toggleMode, editProd, changeField }) {
  return <div data-id={id}>
    name: <ProductField id={id}
          text={name}
          type="name" 
          changeField={changeField}
          isEdit={isEdit}
          editProd={editProd}
          />
    cost: <ProductField 
          id={id}
          text={cost}
          type="cost"
          isEdit={isEdit}
          editProd={editProd} 
          changeField={changeField}
          />

    <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit' }</button>
  </div>
}

export default Product