import React, {useContext} from 'react';
import { UserDispatch } from './App2'

const User = React.memo(function User({user}) {
  const{username, email, id, active} = user;
  const dispatch = useContext(UserDispatch);
  
  // useEffect(() => {
  //   console.log('설정됨')
  //   console.log(user);
  //   return () => {
  //     console.log('값이 바뀌기전')
  //     console.log(user);
  //   }
  // }, [user])
  return (
    <div>
      <b 
        style={{
          color: active ? 'green' : 'black',
          cursor:'pointer'
        }}
        onClick={() => dispatch({ 
        type: "TOGGLE_USER",
        id
        })}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => dispatch({
        type: "REMOVE_USER",
        id
      }) }>삭제</button>
    </div>
  )
})


const UserList = ({users}) => {
 
  return (
    <div>
      {
        users.map(
        user => (
          <User 
            user={user} 
            key={user.id} 
          />
        )
        )  
      }
      </div>
  );
};

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);