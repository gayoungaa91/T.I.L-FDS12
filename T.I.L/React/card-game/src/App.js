import React, {useState} from 'react';
import Card from './Card';
import './App.css';

const App = () => {
   const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
   const [id, setId] = useState('');

  return (
    <div className="App">
      <Card num = {num} setNum = {setNum} id = {id} setId = {setId} />
    </div>
  );
}

export default App;
