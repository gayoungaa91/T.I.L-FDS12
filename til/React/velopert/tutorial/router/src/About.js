import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  // About컴포넌트에서 location search에 있는 
  // 쿼리 스트링을 파싱해서 디테일 값을 불러왔고
  // detail값이 true라면 보여주겠다.

  // url파라미터이건 쿼리이건 문자열로 오기때문에 문자열로 맞춰서 비교해줘야함
  const detail = query.detail === 'true'

  return (
    <div>
      <h1>소개</h1>
      <p>소개합니다</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
};

export default About;