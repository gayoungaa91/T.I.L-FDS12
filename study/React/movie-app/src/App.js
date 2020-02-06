import React from 'react';

function Food({fav}) {
  console.log(fav)
  return (
    <div>
      <h1>I like u {fav}</h1>
      {/* <h2>{props.value}</h2> */}
    </div>
    )
}

function App() {
  return <Food 
  fav  = "kimchi" />
}

export default App;
