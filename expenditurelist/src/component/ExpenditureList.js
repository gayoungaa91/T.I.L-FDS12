import React from 'react';
import styled from 'styled-components';
import ExpenditureItem from './ExpenditureItem';
import { useExpenitureState, useExpeniturefilter} from './ExpenditureContext';


const ExpenditureListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`

function ExpenditureList() {
  const Expenditure = useExpenitureState();
  const filter = useExpeniturefilter();

  const filterExpenditure = filter.filterItem ? Expenditure.filter(item => item.category === filter.filterItem) : Expenditure


  return (
    <ExpenditureListBlock>
       {/*        {/* <ExpenditureItem>
>
      hello item
      </ExpenditureItem> */}
      {filterExpenditure.map(
        item => <ExpenditureItem 
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          amount={item.amount}
        />
      )}
    </ExpenditureListBlock>
  )
}
export default ExpenditureList;