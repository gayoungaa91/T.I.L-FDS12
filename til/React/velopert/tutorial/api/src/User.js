import React from 'react';
import axios from 'axios';
// import useAsync from './useAsync'; 
import {useAsync} from 'react-async'; 

async function getUser({id}) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.data;
}

const User = ({id}) => {
  // id값이 바뀔때마다 () => getUser(id) 호출
  const { 
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
    // watch: id, id값이 바뀌면 다시 호출됨, deps에 넣었던거랑 비슷한 역할
  })


  if(isLoading) return <div>로딩중</div>
  if(error) return <div>에러가 발생</div>
  if(!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b>{user.email}
      </p>
    </div>
  );
};

export default User;