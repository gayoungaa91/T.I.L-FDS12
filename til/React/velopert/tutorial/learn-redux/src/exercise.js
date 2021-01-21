import React from 'react';
//  스토어를 만들어 주는 함수
import { createStore } from 'redux';

//  초기값
const initalState = {
  counter: 0,
  text: '',
  list: [],
}

// 액션타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수
// 액션 객체를 만들어서 반환 보통 화살표함수로 작성, return 생략가능
// 함수를 작성할때는 소문자, 타입을 작성할때는 대문자
// 언더바가 있을때에는 카멜케이스
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text,
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item,
})

// 리듀서
// 리덕스에서 초기상태를 만들때 리듀서를 한번 호출한다. 그시점에 state가 undefined라면 초기상태가 만들어지지 않는다.
function reducer(state = initalState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
      case DECREASE:
        return {
          ...state,
          counter: state.counter -1
        }
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        }
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        }
    default:
      return state;
  }
}

// 스토어
// 리듀서가 완성되면 스토어를 만들수 있다.
// 초기상태가 잘 만들어졌다. 그럼 구독을하고 dispatch를 한다.
const store = createStore(reducer)

const listener = () => {
  // 스토어의 현재상태를 가져온다.
  const state = store.getState();
  console.log(state);
}
// 스토어에 구독하기 (listene함수)
const unsubscribe = store.subscrive(listener)
// 구독을 해지하고 싶을떈 호출하면 된다. unsubscribe();

// 구독을 하고나서 dispatch할때에는 
// 액션이 dispatch할때마다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안냥하세요'));
store.dispatch(addToList({id: 1, text: '아궁'}))

window.store = store
window.unsubscribe = unsubscribe;
// 를 하게되면 store인스턴스를 콘솔에서 사용할 수 있다.


// 특정 액션에 dispatch되면 store의 상태가 업데이트 되는거고,
// 상태가 업데이트 되면 우리가 구독했던 함수가 호출이 된다.
// unsubscribe() 하게돠면 그때부터 호출이 되지 않는것이다.