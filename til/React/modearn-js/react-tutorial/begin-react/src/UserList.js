import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}(</b><span>{user.email})</span>
    </div>
  )

}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velo',
      email: 'velo@gmail.com'
    },
    {
      id: 2,
      username: 'gaga',
      email: 'gaga@gmail.com'
    },
    {
      id: 3,
      username: 'haha',
      email: 'haha@gmail.com'
    }
  ];

  return (
    // 객체형태의 배열을 컴포넌트형의 배열로 변형해준다.
    <div>
      {users.map(user => (<User user={user} key={user.id} />) )}

    </div>
  )
}

export default UserList;