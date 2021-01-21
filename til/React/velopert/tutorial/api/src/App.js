
import React from 'react';
import Users from './Users';
import { UserProvider } from './UsersContext';

// Provider로 감싸주어야만 context에서 만든 커스텀hook을 사용할 수 있다.
function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
