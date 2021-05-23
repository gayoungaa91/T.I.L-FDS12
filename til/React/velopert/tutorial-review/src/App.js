import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setinputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '이가영',
      email: 'ga@naver.com',
      active: true
    },
    {
      id: 2,
      username: '이규하',
      email: 'pro@gmail.com',
      active: false
    },
    {
      id: 3,
      username: '이하영',
      email: 'love@hanmail.net',
      active: false
    }
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setinputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setinputs({
      username: '',
      email: ''
    });
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
