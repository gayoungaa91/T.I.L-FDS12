// 액션 타입
// 몇씩 카운트 올릴지가 DIFF
// DOCKS 패턴앞에는 접두사를 붙인다. (다른 모듈과 이름이 중복되지 않개위함)
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 (앞에 export)
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서에서 관리할 초기상태
const initialState = {
  number: 0,
  diff: 1 // 1씩 카운터를 올리겟다
};

// reducer 함수 (앞에 export)
// state가 undefined일때 initialState를 기본값으로 사용하도록 설정
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
