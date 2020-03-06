import React, {useEffect} from 'react';

const User = ({user, onRemove, onToggle}) => {
  const{username, email, id, active} = user;
  
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
      <b style={{
        color: active ? 'green' : 'black',
        cursor:'pointer'
      }}
      onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}


const UserList = ({users, onRemove, onToggle}) => {
 
  return (
    <div>
      {
        users.map(
        user => (
          <User 
            user={user} 
            key={user.id} 
            onRemove={onRemove}
            onToggle={onToggle}
          />
        )
        )  
      }
      </div>
  );
};

export default UserList;