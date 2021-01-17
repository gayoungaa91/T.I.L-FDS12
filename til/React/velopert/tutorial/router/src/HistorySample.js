import React, {useEffect} from 'react';

const HistorySample = ({ history }) => {
  const goBack = () => {
    // 뒤로가기
    history.goBack();
  }

  const goHome = () => {
    // 원하는 페이지로 이동
    history.push('/');
  }

  const replaceToHome = () => {
    history.replace('/');
  }

  useEffect(() => {
    console.log(history);
  
    const unblock = history.block('정말 떠나실 건가요?');
    return () => {
      unblock();
    }
  }, [history])
  return (
    <div>
      <button onClick={goBack}>뒤로 가기</button>
      <button onClick={goHome}>홈에 가기</button>
      <button onClick={replaceToHome}>홈에 가기(Replace)</button>
    </div>
  );
};

export default HistorySample;