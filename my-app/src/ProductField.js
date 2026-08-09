import React, { useState } from "react";

function ProductField({ id, text, type, isEdit, editProd, changeField }) {
	const [isEditField, setIsEditField] = useState(false); 
	return isEdit
		? <input value={text} onChange={event => changeField(id, type, event)} />
		: <span onClick={() => setIsEditField(true)}>{text}</span>
	;
}

export default ProductField