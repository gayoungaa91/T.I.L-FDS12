import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = '우선순위 1순위는 사랑해 이가영';
  return (
    <div

    style = {{
      backgroundColor: 'black',
      color: 'pink',
      padding: 16,
      fontSize:100,
      textAlign: 'center'
    }}
    >
      {name}
      </div>
  );
}

export default App;
