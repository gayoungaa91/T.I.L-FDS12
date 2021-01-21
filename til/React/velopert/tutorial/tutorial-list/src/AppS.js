import React , {useRef, useState, useMemo, useCallback} from 'react';
// import Counter from './Counter'
// import InputSample from './InputSample'
import UserList from './UserList2';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 세는중');
  return users.filter(user=>user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs;

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);


  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs])
  // inputs가 바뀔때만 사용하게되고, 아니라면 그냥 재사용하게 된다.
  // 참조하는것들을 넣어준다.
  // deps에는 지금 영향을 받는 참조값을 넣어주지 않으면, 최신상태의 참조값이 아니라 이전값이 영향을 받을 수 있다.

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    // setUsers([...users, user]);
    setUsers(users => users.concat(user))
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1; 
  }, [username, email, users])

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, [])
  // 배열에 있는 특정아이템만 업데이트 해줄때에도 map을 사용할 수 있다.
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
    ))
  }, [])
  
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} />
       <UserList users={users} onRemove={onRemove} onToggle = {onToggle}/>
  <div>활성 사용자 수: {count}</div>
    </div>
  );
}

export default App;
