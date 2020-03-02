import React, { Component } from 'react';
import PropsTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       나는 {name} 이에요<br />
//       태그 사이 값은{children}<br />
//       내가 가장 조아하는 숫자는 {favoriteNumber}
//     </div>
//   );
// };


class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요:) 저는 {name} 입니다. <br />
        MyComponent 사이값은 {children} 이구요, <br />
        제가 좋아하는 숫자는 {favoriteNumber} 이쥬?
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name : '라뷰'
}

MyComponent.PropsTypes = {
  name : PropsTypes.string,
  favoriteNumber: PropsTypes.number.isRequired
};




export default MyComponent;