import React from "react";

function ProductField({ id, text, type, isEdit, editProd, changeField }) {
	const [isEdit, setIsEdit] = useState(false); 
	return isEdit
		? <input value={text} onChange={event => changeField(id, type, event)} />
		: <span onClick={() => setIsEdit(true)}>{text}</span>
	;
}

export default ProductField