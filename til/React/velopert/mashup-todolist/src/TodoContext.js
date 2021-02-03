// @flow
import React, { useReducer } from 'react';

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
    text: '이규삼 컨텍스트 맏들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기기',
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
      return state.map(todo => {
        todo.id === action.id ? {...todo, done: !todo.done} : todo
      })
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error('unhandled action type: ${action.type}')
  }

}

function TodoContext() {

}

export default TodoContext;