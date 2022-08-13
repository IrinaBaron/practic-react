// import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  // const age = 19;
  // const isAuth = false;
  function square(num) {
    return num ** 2;
  }

  function cube(num) {
    return num ** 3;
  }

  const sum = square(3) + cube(4);
  return <div>
    { sum}
    {/* { age > 18 ? <p>more 18</p> : <p>small 18</p> } */}
    {/* { !isAuth && <p>вы авторизованы</p> } */}
  </div>
}

export default App;
