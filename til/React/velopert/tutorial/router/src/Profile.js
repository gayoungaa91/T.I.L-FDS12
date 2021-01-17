import React from 'react';

const profileData = {
  velopert: {
    name: '김민준',
    description: "FE"
  },
  gayoung: {
    name: '이가영',
    description: "신입"
  },
}
// match는 라우트 컴포넌트에서 넣어주는 props, 라우터를 사용한다며 자동으로 받아와짐
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if(!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>
  }
  
  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;