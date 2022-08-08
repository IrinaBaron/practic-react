// import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  // const arr = [ 1, 2, 3, 4, 5];
  // const obj = {name: 'John', surname: 'Smith'};
  // const li1 = <li>text1</li>;
  // const li2 = <li>text2</li>;
  // const li3 = <li>text3</li>;
  const attr = 'block';
  return (
    <div className="wrapper">
      <div id={attr}>
        text
      </div>
      {/* <ul>
        {li1}
        {li2}
        {li3}
      </ul> */}
      {/* <p>
        name: <span>{obj.name}</span>, 
        <br />
        surname: <span>{obj.surname}</span>
      </p> */}
      {/* <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </ul> */}
    </div>
  );
}

export default App;
