import React, {useReducer, useEffect, useCallback} from 'react';

// 3가지 액션(loading, sucess, error)
function reducer(state, action) {
  switch(action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      }
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error('Unhandled action type: ${action.type} ')
  }
}
// callback: api 호출하는 함수를 넣어줄것
// deps: 나중에 useEffect를 사용해서 컴포넌트가 로딩됐을때, 혹은 어떤값이 변경됐을때, api 재요청할건데 deps를 그대로 사용할 예정이다.
// skip: 처음에 로딩되지 않고, 특정 인터렉션이 일어났을때, 데이터를 가져오는것
export default function useAsync(callback, deps = [], skip =false ) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  })

  // useCallback을 사용하면, api호출할때마다 함수를 새로 만들어서 사용하게 되었었는데
  // fetchData를 한번만 만들어서 사용할 수 있다.
  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING"});
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  }, [callback]);

  useEffect(() => {
    if(skip) return;
    fetchData()
    // eslint-disable-next-line 
  }, deps)

    // 처음상태와 api통신할때마다 fetch함수를 새로 만들어 사용할 수 있다.
  return [state, fetchData];
}

