import React, {createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
}
// 로딩중일때 바뀔 상태객체
const loadingState = { 
  loading: true,
  data: null,
  error: null,
};
// 성공했을떄 상태를 만들어줄 함수
const success = data => ({
  loading: false,
  data,
  error: null,
})

// 실패했을때 상태를 만들어주는 함수
const error = e => ({
  loading: false,
  data: null,
  error: e,
})
// 리듀서, 총 6개의 액션 상태를 사용할 예정
// GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR
// GET_USER, GET_USER_SUCCESS, GET_USER_ERROR
function usersReducer(state, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      }
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      }
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      }
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      }
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      }
    default: 
      throw new Error('Unhandled action type', action.type)
  }
} 
 
// 상태와 디스패치를 위한 컨텍스트, 따로따로 만드는것이 최적화에 용이, value를 넣어줄수 있다.
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return(
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}

// useContext를 통해 사용할 수도 있지만,
// 커스텀 hook을 만들면 다른 컴포넌트들에서 사용할때 더 간편하다.

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UserProvider');
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if(!dispatch) {
    throw new Error('Cannot find UserProvider')
  }
  return dispatch;
}

// 아래의 함수들로 단순히 api요청뿐만 아니라, api를 요청 하기전에 특정 액션을 dispatch하고,
// api가 성공하거나 실패했을때도 특정액션을 dispatch한다.
// dispatch는 추후 파라미터에 받아와서 사용할 것이다.
export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    dispatch({
      type: 'GET_USERS_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USERS_ERROR',
      data: e
    })
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: 'GET_USER_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USER_ERROR',
      data: e
    })
  }
}