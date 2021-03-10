import React from 'react';
import styled from 'styled-components';
import { useExpenitureState } from './ExpenditureContext';

const ExpenditureHeadBlock = styled.div`
  padding-top: 25px;
  padding-left: 32px;
  padding-right: 32px;
  
  h1 {
    margin-bottom: 15px;
    font-size: 28px;
    color: #343a40;
  }

  .day {
    margin-bottom: 15px;
    color: #343a40;
    font-weight: bold;
    font-size: 18px;
  }

  .total-expenditure {
    margin-bottom: 15px;
    color: #343a40;
    font-size: 18px;
    font-weight: bold;
  }
  .highlighter {
    margin-left: 5px;
    color: #c92a2a;
  }
`;

function ExpenditureHead() {
  const Expenditure = useExpenitureState();
  let sum = 0;
  Expenditure.forEach(item => sum += item.amount)

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
   <ExpenditureHeadBlock>
     <h1>오늘의 지출</h1>
     <div className="day">{dateString}</div>
     <div className="total-expenditure">총 지출:<span className="highlighter">-{sum}원</span></div>
   </ExpenditureHeadBlock>
  )
}
export default ExpenditureHead;