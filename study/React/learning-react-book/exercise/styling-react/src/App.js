import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import SassComponent from './SassComponent'
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header>
      //     <img src = {logo} className="logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       href="http://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <SassComponent />
      </div>
    )
  }
}


export default App;