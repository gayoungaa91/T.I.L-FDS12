// import React from 'react';
// // import Say from './Say';
// // import EventPractice from './EventPractice';
// import ValidationSample  from './ValidationSample'

// const App = () => {
//   return <ValidationSample/>
// };

// export default App;

import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';s
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample'
// import LifeCycleSample from './LifeCycleSample'
// import Counter from './Counter';
import info from './info';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    // return (
    //   <div>
    //     <button onClick={this.handleClick}>랜덤 색상</button>
    //     <LifeCycleSample color={this.state.color }/> 
    //   </div>
    // )
    return <info />
  }
}

export default App;