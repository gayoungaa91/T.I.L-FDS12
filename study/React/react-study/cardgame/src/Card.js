import React, { useState } from 'react';

const Card = () => {
  const value = useState(1)
  const getRandom = () => Math.random();
  console.log(getRandom)
  return (
      <>
      <h1>안녕 랜덤 카드</h1>
      <div className="divBox">
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
        <div className='miniBox'/> 
      </div>
    </>
  );
};

export default Card;