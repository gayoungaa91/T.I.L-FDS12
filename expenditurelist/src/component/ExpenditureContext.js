import React, { useReducer, createContext, useContext, useRef, useState } from 'react';

const initial = [
  {
    id: 1,
    title: '용개반점',
    category: '식사',
    amount: 7000
  },
  {
    id: 2,
    title: '양배추',
    category: '식료품',
    amount: 5000
  },
  {
    id: 3,
    title: '택시비',
    category: '교통',
    amount: 20000
  },
  {
    id: 4,
    title: '관리비',
    category: '생활',
    amount: 100000
  },
  {
    id: 5,
    title: '병원 진료',
    category: '의료',
    amount: 7000
  },
]

function expenitureReducer(state, action) {
 switch(action.type) {
   case 'CREATE':
    return state.concat(action.item)
    case 'REMOVE':
      return state.filter(item => item.id !== action.id)
    case 'EDIT':
      return state.map(item => 
        item.id === action.item.id ?
        {...item,  ...action.item}:
        item
      )
    default:
    throw new Error('error: ${action.type}')
 }
}

// state, dispatch 컨텍스트 각각 
const ExpenitureStateContext = createContext();
const ExpenitureDispatchContext = createContext();
const ExpenitureNextIdContext = createContext();
const ExpenitureFilterItemContext = createContext();


export function ExpenditureProvider({ children }) {
  const [state, dispatch] = useReducer(expenitureReducer, initial)
  const [filterItem, setFilterItem] = useState('');
  const nextId = useRef(6);

  const filter = {
    filterItem,
    setFilterItem
  }
    
  return (
    <ExpenitureStateContext.Provider value={state}>
      <ExpenitureDispatchContext.Provider value={dispatch}>
        <ExpenitureNextIdContext.Provider value={nextId}> 
        <ExpenitureFilterItemContext.Provider value={filter}>
         {children}
         </ExpenitureFilterItemContext.Provider>
        </ExpenitureNextIdContext.Provider>
      </ExpenitureDispatchContext.Provider>
    </ExpenitureStateContext.Provider>
  )
}

export function useExpenitureState() {
  const context = useContext(ExpenitureStateContext)
  if(!context) {
    throw new Error('Cannt find ExpenitureProvider')
  }
  return context;
}

export function useExpenitureDispatch() {
  const context = useContext(ExpenitureDispatchContext)
  if(!context) {
    throw new Error('Cannt find ExpenitureProvider')
  }
  return context;
}

export function useExpenitureNextId() {
  const context = useContext(ExpenitureNextIdContext)
  if(!context) {
    throw new Error('Cannt find ExpenitureProvider')
  }
  return context;
}

export function useExpeniturefilter() {
  const context = useContext(ExpenitureFilterItemContext)
  if(!context) {
    throw new Error('Cannt find ExpenitureProvider')
  }
  return context;
}