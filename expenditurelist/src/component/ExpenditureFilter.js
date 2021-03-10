import React from 'react';
import styled from 'styled-components';
import { useExpeniturefilter } from './ExpenditureContext';


const ExpenditureFilterBlock = styled.div`
  margin: 0 auto;
  width: 90%;
  color: #343a40;
  border-top: 2px solid #e9ecef;
  border-bottom: 2px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }
  select {
    width: 50px;
    height: 25px;
    padding: 3px 0;
    font-size: 12px; 
    margin-left: 5px;
  }
`
function ExpenditureFilter() {
  const filter = useExpeniturefilter();

  const onSelect = e => {
    filter.setFilterItem(e.target.value);
  }

  return (
    <ExpenditureFilterBlock>
    <h2>카테고리별로 보기:</h2>
    <select onChange={onSelect}>
      <option value="">전체</option>
      <option value="식사">식사</option>
      <option value="식료품">식료품</option>
      <option value="교통">교통</option>
      <option value="생활">생활</option>
      <option value="의료">의료</option>
  
    </select>
    </ExpenditureFilterBlock>
  )
}

export default ExpenditureFilter;