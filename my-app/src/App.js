// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import uuid from 'react-uuid';

// const users = [
//   { id: uuid(), name: 'user1', surn: 'surname1', age: 30},
//   { id: uuid(), name: 'user2', surn: 'surname2', age: 31},
//   { id: uuid(), name: 'user3', surn: 'surname3', age: 32},
// ]

// function App() {
//   const res = users.map(function(item) {
//     return <li key={item.id}>
//       Name: {item.name};
//       Surname: {item.surn};
//       Age: {item.age}
//     </li>
//   })
//   return <ul>
//     { res }
//   </ul>
// }

// function App() {
//   let [inCart, setInCart] = useState(false);

//   return <div>
//     <span>{inCart ? 'в корзине' : 'не в корзине'}</span>

//     <button onClick={() => setInCart(!inCart)}>btn</button>
//   </div>
// }

function App() {
  let [name, setName] = useState('Ivan');
  let [surname, setSurname] = useState('Ivanov');
  let [age, setAge] = useState(20);
  let [inStatus, setStatus] = useState(false);

  return <div>
    <span>{name}</span>
    <span>{surname}</span>
    <span>{age}</span>
    <span>{inStatus ? 'blocked' : 'unblocked'}</span>
    <button onClick={() => setName('Dimitar')}>change name</button>
    <button onClick={() => setSurname('Dimitrov')}>change surname</button>
    <button onClick={() => setAge(age + 1)}>add age</button>
    <button onClick={() => setAge(age - 1)}>remove age</button>
    <button onClick={() => setStatus(!inStatus)}>{inStatus ? 'unblock' : 'block'}</button>
  </div>
}

export default App;
