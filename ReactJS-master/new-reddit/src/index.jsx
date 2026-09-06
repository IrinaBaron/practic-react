import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
// import { Header } from './Header';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('react_root'));
})
