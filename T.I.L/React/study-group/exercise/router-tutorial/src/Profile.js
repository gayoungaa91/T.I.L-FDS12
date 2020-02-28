import React from 'react';

const data = {
  amy: {
    name : '이가영',
    description: '이규하'
  },
  progyu: {
    name: '규하형',
    description: '메롱'
  }
}

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if(!profile) {
    return <div>존재하지 않는 사용자 입니다/</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{ profile.description }</p>
    </div>
  );
};

export default Profile;