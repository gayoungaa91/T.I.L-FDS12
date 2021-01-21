import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 컴포넌트가 가장처음 렌더링 될때, axios를 사용해서 api를 요청
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null)
        setError(null)
        setLoading(true)
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/'
        )
        setUsers(response.data)
      } catch (e) {
        setError(e) 
      }
      setLoading(false)
    }
    fetchUsers(); 
  }, [])
  //  배열의 의미는 어떠한 작업을 하겠다는 의미
  
  if (loading) return <div>로딩중</div>
  if (error) return <div>에러 발생</div>
  if (!users) return null;

  return (
    <ul>
      {users.map(user => (
      <li key={user.id}>
        {user.username}({user.email})
      </li>
      ))}
    </ul>
  );
};

export default Users;