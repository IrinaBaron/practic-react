import React from "react";
import UserField from "./UserField";

function User({ id, name, surname, age, isEdit, editProd, toggleMode}) {
  return <div data-id={id} className="user">
    name: <UserField 
          id={id}
          text={name}
          type="name"
          isEdit={isEdit}
          editProd={editProd}
          />
    surname: <UserField 
              id={id}
              text={surname}
              type="surname"
              isEdit={isEdit}
              editProd={editProd}
              />
    age: <UserField 
          id={id}
          text={age}
          type="age"
          isEdit={isEdit}
          editProd={editProd}
          />

    {/* <span>{inBlock ? 'blocked' : 'unblock'}</span>
    <button onClick={() => addInBlock(id)}>to block</button> */}

  <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit' }</button>
  </div>
}

export default User