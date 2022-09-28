// import logo from './logo.svg';
import './App.css';

import React from 'react';
import uuid from 'react-uuid';

const users = [
  { id: uuid(), name: 'user1', surn: 'surname1', age: 30},
  { id: uuid(), name: 'user2', surn: 'surname2', age: 31},
  { id: uuid(), name: 'user3', surn: 'surname3', age: 32},
]

function App() {
  const res = users.map(function(item) {
    return <li key={item.id}>
      Name: {item.name};
      Surname: {item.surn};
      Age: {item.age}
    </li>
  })
  return <ul>
    { res }
  </ul>
}

export default App;
