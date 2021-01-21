import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

const AppTest = () => {
  return (
    <div>
      <Wrapper>
        <Hello name="gayoung" value="kiki" color="pink"/>
      </Wrapper>
    </div>
  );
};

export default AppTest;