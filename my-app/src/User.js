import React, { useState } from "react";
import uuid from 'react-uuid';

function id() {
  return uuid()
}

const initUsers = [
	{id: id(), name: 'user1', surname: 'surn1', age: 30},
	{id: id(), name: 'user2', surname: 'surn2', age: 31},
	{id: id(), name: 'user3', surname: 'surn3', age: 32},
];

function Users() {
  const [users, setUsers] = useState(initUsers);

  const items = users.map( user => {
    return <User 
    key={user.id}
    id={user.id}
    name={user.name}
    surname={user.surname}
    age={user.age}
    />
    
  })

  return <div>
    {items}
  </div>
}

function User({ id, name, surname, age}) {
  return <div data-id={id} className="user">
    name: <span>{name}</span>
    surname: <span>{surname}</span>
    age: <span>{age}</span>
  </div>
}

export default Users