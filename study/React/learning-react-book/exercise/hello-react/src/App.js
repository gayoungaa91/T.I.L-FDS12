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
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref = {(ref) => this.ScrollBox=ref} />
        <button onClick = {() => this.ScrollBox.scrollToBottom()}>
          맨밑으루우
        </button>
      </div>
    )  
  }
}

export default App;