// @flow
import React, { createContext, useReducer, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '스타일링',
    done: true,
  },
  {
    id: 3,
    text: '이규똥 컨텍스트 맏들기',
    done: false,
  },
  {
    id: 4,
    text: '가영 기능 구현하기기',
    done: false,
  }
]
// 3가지의 액션 만들기
// create, toggle, remove

// 액션안에 todo넣어서 나중에 dispatch 해줄예정
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE': 
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error('unhandled action type: ${action.type}')
  }
}

// 두개의 컨텍스트 state, dispatch 
// 한번에 만드는것보다 가각 만드는게 편하다.
// 하나더 아이디

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value = {state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
        { children }
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  ) 
}

// 커스텀 hook
export function useTodoState() {
  const context = useContext(TodoStateContext)
  if(!context) {
    throw new Error ('Cannot find TodoProvider')
  }
  return context
}
export function useTodoDisPatch() {
  const context = useContext(TodoDispatchContext)
  if(!context) {
    throw new Error ('Cannot find TodoProvider')
  }
  return context
}
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if(!context) {
    throw new Error ('Cannot find TodoProvider')
  }
  return context
}


// 컨텍스탁 없을때 에러처리