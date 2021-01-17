import React from 'react';
import Profile from './Profile';
import { NavLink, Route} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles()  {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink 
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }}
            // 클래스 이름을 주고 싶을때,
            activeClassName='active'
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profiles/gayoung"
            activeStyle={{ background: 'black', color: 'white' }}
          >
          gayoung
          </NavLink>
        </li>
      </ul>
      <Route 
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      />
    <Route path="/profiles/:username" component={Profile} />
   <WithRouterSample /> 
   </div>
  );
};

export default Profiles;