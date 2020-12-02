import React from 'react';

function Hello ({value, is}) {
  return (

  <div>
    {value}
    {is ? 'special' :'not'}
  </div>
  )
}

export default Hello;