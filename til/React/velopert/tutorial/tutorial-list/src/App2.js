import React , {useRef, useMemo, useCallback, useReducer, createContext} from 'react';
// import Counter from './Counter'
// import InputSample from './InputSample'
import UserList from './UserList2';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 세는중');
  return users.filter(user=>user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'rkdud',
      email:'hap@ss',
      active: true,
    },
    {
      id: 2,
      username: 'rbgk',
      email:'pro@nn',
      active: false,
    },
    {
      id: 3,
      username: 'zzzz',
      email:'love@dd',
      active: false,
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   }
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      })
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.map(user => user.id === action.id);
        user.active = !user.active
      })
      // return {
      //   ...state,
      //   users: state.users.map(user => 
      //     user.id === action.id
      //       ? {...user, active: !user.active}
      //       : user
      //   )
      // }
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id)
        draft.users.splice(index, 1)
      })

      // return produce(state, draft => {
      //   draft.users.filter(user => user.id !== action.id)
      // })

      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const {username, email} = form;
  const nextId = useRef(4);
  const {users} = state;
  // const {username, email} = state.inputs;

  // e받아와서 특정작업, 컴포넌트 만들어질때 생성되어 앞으로는 재사용할 예정
  // const onChange = useCallback(e => {

  //   const {name, value} = e.target;

  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value,
  //   })
  // }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    })  
    nextId.current += 1
    reset();
  }, [username, email, reset])
  
  const count = useMemo(() => countActiveUsers(users), [users] )

  return (
    <div>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser 
          username={username} 
          email={email} 
          onChange={onChange} 
          onCreate={onCreate}
        />
        <UserList   
          users={users} 
        />
      </UserDispatch.Provider>
    <div>활성 사용자 수:{count}</div>
    </div>
  );
}

export default App;
