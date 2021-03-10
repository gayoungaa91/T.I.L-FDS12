import React from 'react';
import styled from 'styled-components';

const ExpenditureTemplateBlock = styled.div`

  background: #e9ecef;
  width: 512px;
  height: 768px;

  /* position:relative; 초록색 버튼 내부 최하단  */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0,0,0,0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function ExpenditureTemplate({children}) {
  return (
    <ExpenditureTemplateBlock>
      {children}
    </ExpenditureTemplateBlock>
  )
}
export default ExpenditureTemplate;
