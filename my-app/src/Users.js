import React, { useState } from "react";
import uuid from 'react-uuid';
import User from "./User";

function id() {
  return uuid()
}

const initUsers = [
	{id: id(), name: 'user1', surname: 'surn1', age: 30, inBlock: false},
	{id: id(), name: 'user2', surname: 'surn2', age: 31, inBlock: false},
	{id: id(), name: 'user3', surname: 'surn3', age: 32, inBlock: false},
];


function Users() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.isEdit = !user.isEdit;
      }
      
      return user;
    }));
  }

  function editProd(id, field, event) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user[field] = event.target.value;
      }
      
      return user;
    }));
  }
  function addInBlock(id) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.inBlock = true;
      }
      
      return user;
    }));
  }

  const items = users.map( user => {
    return <User 
    key={user.id}
    id={user.id}
    name={user.name}
    surname={user.surname}
    age={user.age}
    isEdit={user.isEdit}
    toggleMode={toggleMode}
    editProd={editProd}
    />
    
  })

  return <div>
    {items}
  </div>
}



export default Users