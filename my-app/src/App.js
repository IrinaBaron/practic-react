// import logo from './logo.svg';
import './App.css';

import React from 'react';

const users = [
  { id: 123, name: 'user1', surn: 'surname1', age: 30},
  { id: 456, name: 'user2', surn: 'surname2', age: 31},
  { id: 789, name: 'user3', surn: 'surname3', age: 32},
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
