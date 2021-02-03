# **추천** 사이트
- color : (https://yeun.github.io/open-color/#yellow)
- polised: (https://polished.js.org/)
- 리액트 아이콘: ()
- JSONPlaceholder : 연습용 API 제공 (https://jsonplaceholder.typicode.com/)
- 리액트 라우터 공식 메뉴얼: (https://reactrouter.com/core/api/Prompt)



# vscode 단축키

- rsc / rcc 




# props (properties)
1. props로 넣어준 값들은 객체형태로 들어가 있다.
2. props.name, props.children 모두 파라미터로 가져와 사용할 수 있다.
3. { } 비구조화 할당을 통해 바로 사용할 수 있다.



```
// props.name

import React from 'react';

// 비구조화 할당 (props.name)
const Hello = ({name}) => {
  return (
    <div>
      <h1>HELLO {name}</h1>
    </div>
  );
};

export default Hello;

// props.chidren

import React from 'react';

const Wrapper = ({children}) => {
  const style = {
    border: '2px solid black',
    padding: 16,
  }
  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
```



![image-20210118142744536](/Users/igayeong/Library/Application Support/typora-user-images/image-20210118142744536.png)






# 		   useState

1. 상태가 바뀌게 되면 렌더링이 일어난다.
2. 리액트에서 객체를 업데이트 해야할 때에는 기존의 객체를 복사해야 한다. (스프레트 문법)
3. 스프레드 문법을 통해 기존객체를 복사할 수 있다.
4. 그위에 업데이트 상태의 값을 덮어씌운다.
5. 그렇게 해야 리액트에서 상태가 변화됐음을 감지할 수 있고, 이에 따라 필요한 렌더링이 발생한다.
6. 이과정을 불변성을 지킨다고 말한다.
7. 그냥 name이라고 쓰면 문자열이 들어가기 때문에 [ name ] 대괄호를 넣어주면 key값이 변경된다.  



#### 여러개의 input 상태 관리하기

```
1개의 상태 관리할때 useState를 주고 onChange에서 처리했다.
5개의 상태 관리할경우 useState를 5번쓰고 onChange함수 역시 5번 생성해야 한다.
따라서 input에 name을 주고 이벤트가 발생시 name을 참조하는 방법을 권장한다.
그렇다면 한개의 useState와 한번의 onChange에서 처리할 수 있다.
```



#### 배열 메소드 렌 더링

```
배열형태:
return (
    <div>
      { // 객체안에 배열메소드를 사용한다.
        users.map(user => 
          <User user={user} key={user.id}/> // user는 컴포넌트의 매개변수가 된다.
        )
      }
    </div>
  )

경고메시지: key prop
각 원소들마다 key라는 고유값을 줌으로써, 나중에 리렌더링 성능을 최적화 할수있게 해준다.
배열메소드의 두번째 인자인 index를 넣어줄수도 있지만, 경고 메시지만 사라질뿐 성능 최적화는 어렵다.
원소의 개수가 20개 이하면 상관없지만, 개수가 많다면 최적화를 위해 Key값을 넣어줘야 최적화가 가능하다.
```



# useRef

1. 특정 엘리먼트 DOM을 선택해야 하는 상황에서 쓰일 수 있다.
2. 크기나 위치 포커스, html5 관련 비디오 라이브러리의 경우 특정 DOM에다가 직접 적용해야 하기때문에 필요하다.
3. 변수 만들기 (리렌더링 될때마다 기억할 수 있는값, 즉 값이 바뀌어도 리렌더링 되지 않는다.)

```
변수선언의 경우 렌더링이 일어나면 초기화가 일어난다.
상태를 유지하기 위해선 useState를 사용해야 하는데, useState역시 상태가 바뀌게 되면 렌더링이 일어난다.
굳이 리렌더링이 필요없는 값일때 useRef를 사용해 줄수 있다.
- set함수의 id값
- 외부 라이브러리를 사용하여 생성된 인스턴스 scroll위치

const nextId = useRef(4);
nextId.current += 1
key값을 누적해서 1씩 더해주는것이다.
useState로 관리해줘도 상관없지만, 굳이 리렌더링이 필요하지 않은 값이기 때문에 useRef를 사용해서 관리해줘도 된다.
```



### 배열

1. 배열에서 요소 추가하기 (스프레스 연산자, concat함수)
2. 배열에서 요소 삭제하기
3. 배열의 항목 수정하기

```
배열에서 요소 추가하는 방법은 두가지가 있다.
스프레드 연산자를 통해 추가할수 있고, concat함수(push는 안됨)를 이용할수 있다.

배열 요소 삭제할때,
onRemove함수를 props로 받아온 후 id를 파라미터로 받아온다
<button onClick={() => onRemove(user.id)}>삭제</button> // 화살표 함수를 사용하는 이유는 파라미터를 받아오고 싶기때문에
```



> 스프레드 연산자 (객체, 배열)
> 자바스크립트 스프레드 연산자






# useEffect

1. 리액트 컴포넌트가 나타나게 될때, 사라지게 될때, 작업을 할수 있다.
2. props값이 변경되면서, 업데이트 되기 전후 작업을 할수 있다.
3. 리렌더링 될때마다 작업이 이루어질수도 있다. 



>  mount  & unmount
>  UI가 그려졌을때 사라졌을때를 말한다.



```
// mount 됐을때,
useEffect(() => {
	console.log('user값이 설정됨')
// return unmount 됐을때,	
	return () => { 
	console.log('user값이 바뀌기전')
	}
}, [user]) <- deps값을 넣어줘야 업데이트 값을 확인할수 있기때문에, 원하는데로 컨드롤하고 싶다면 deps에 값을 넣어줘야함

useEffect 함수를 사용할땐, 첫번째 파라미터에는 함수를 두번째 파리미터에는 [] 배열을 등록한다.
```

### useEffect 실행되는 시점은 UI가 그려진 이후다. 

따라서 DOM에 직접 접근해도 된다.



### 컴포넌트가 mount될때 처리하는 작업

1. props => state
2. REST API
3. D3 Video.js
4. setInterval, setTimeout



### 컴포넌트가 unmount될때 처리하는 작업

1. ClearInterval, ClearTimeout
2. 라이브러리 인스턴스 제거



> 리액트 컴포넌트에서는 부모컴포넌트가 리랜더링되면 자식컴포넌트도 리렌더링 된다.



# useMemo

1. 주로 성능을 최적화 하는 상태에서 사용한다.
2. 불필요한 리렌더링을 방지할 수 있다.



# useCallback

1. useMemo와 비슷하며, 함수를 위한 hook이다.
2. 리렌더링 될때마다 새로 만들어주는 함수를 기존에 만들어진 함수를 사용하는 방향으로 최적화에 도움을 준다.

```
현재 App.js에선 리렌더링 될때마다 함수를 새로 만들어주고 있다.
cpu나 리소스를 많이 낭비되는 작업은 아니나, 만들어놓은 함수를 재사용하는 방법이 훨씬 좋다.
컴포넌트들이 props값이 바뀌지않았더라면 virtualdom에 조차 리렌더링 되지 않게끔 만들어 줄수 있다.

useCallback으로 함수 전체를 감싸주고 함수가 의존하는 값을 deps(inputs)로 넣어준다.
그렇게 되면 inputs의 값이 변경될때만 함수가 새로 만들어지고,
변경되지 않았을때는 기존값을 그대로 사용한다. (가상돔에서 렌더링되는 과정을 줄일수 있어 최적화에 도움이 된다.)

* deps에 상태값을 꼭 넣어줘야 가장 최신상태를 참조할수 있다. *

눈에 띄는 최적화 아니지만, 컴포넌트 리렌더링 최적화 작업을 해줘야만 어느정도 최적화 상태가 된다.
어떤 컴포넌트가 리렌더링 되고 있는지 알기위해서 react dev tools를 사용하여 확인해볼수 있다.
```



# React.memo

1. 컴포넌트 리렌더링 성능을 최적화 해줄수 있다.
2. 컴포넌트에서 리렌더링이 불필요할때에는 이전에 렌더링했던 결과를 재사용할수 있다.

```
export default React.memo(CreateUser);
이런식으로 해주면 props의 값이 바뀌었을때만 리렌더링 해주며, 최적화가 완료된다.

하지만!
UserList 컴포넌트에 연결된 onRemove, onToggle 함수 deps에 users가 있고,
React.memo를 설정했지만 users배열의 값이 바뀌면 onRemove, onToggle이 바뀌고 그렇게되면 다시 리렌더링되는 문제가 발생한다.

기존 users를 참조하면 안된다. 
이문제를 해결하려면 useState의 함수형 업데이트를 하는것이다. 
그렇게 되면 deps에 user를 넣지 않아도 된다.

setUsers(users => users.concat(user))
콜백함수 파라미터 users가 최신의 상태로 조회하기 때문에 deps에 users를 안넣어도 된다는것이다. (deps 대신 콜백함수의 파라미터로)
```



#### 간단한 정리

- useMomo : 연산된 값을 재사용
- useCallback: 함수를 재사용 
- React.memo : 컴포넌트 렌더링 결과물을 재사용

```
모든 컴포넌트나 값이 이 hook을 사용한다고 최적화 되는것이 아니다
오히려 코드가 복잡해지고 더많이 함수가 실행되고 렌더링이 일어날 수 있으니, 최적화가 정말 필요한 부분에 사용하는것이 중요하다.
```



# useReducer

1. useState처럼 상태관리를 해주는 hook이다.
2. 차이점은 useState는 setValue(5) 처럼 직접 지정해주는 반면 useReducer는 액션 객체를 기반으로 상태를 업데이트 한다.
3. 액션이란 업데이트 할때 참조하는 객체이다. (dispatch의 type)
4. reducer라는함수는 상태를 업데이트 하는 함수이다.
5. dispatch란 액션을 발생시키는 함수이다.
6.  즉 dispatch에 액션객체를 실어 보내서 reducer 함수 상태를 업데이트 한다. 
7. 상태업데이트 로직을 컴포넌트 밖으로 분리가 가능하다.



![image-20210120133133168](/Users/igayeong/Library/Application Support/typora-user-images/image-20210120133133168.png)



```
function reducer(state, action) {
	switch (action.type) {
    case 'INCERMENT': 
      return state + 1;
    case 'DECREMENT': 
      return state + 1;
    default: 
      return state;
	}
}
현재 상태와 액션 객체를 받아와서 상태를 반환하는 형태이다.

//useRedecer 
const [number, dispatch] = useReducer(reducer, 0[기본값]);
// 여기서 number는 기본값이고 dispatch는 액션을 발생시키는 함수이다. (보내다)

const [number, dispatch] = useReducer(reducer, 0);

const onIncrase = () => {
	dispatch({
		type: 'INCERMENT'
	})
}
```



# context API
1. context를 만들때에는 createContext 함수를 사용하고 들어가는 파라미터는 기본값이다. (Provider가 사용되지 않았을때)
2. context안에 Provider라는 프로퍼티같은 값이 들어있고, 그 Provider안에는 컴포넌트값이 들어있다.
3. 직접 사용하고 싶을때는 최상위 컴포넌트에 컨텍스트이름.Provider컴포넌트를 사용하고 value를 설정해주면 그게 컨텍스트의 값이 된다.
4. 컨텍스트의 값은 유동적으로 변할 수 있다.



```
app.js 파일에서 userList 컴포넌트에 props를 넘겨주고 userList에서는 직접사용하지 않지만 user컴포넌트에 전달하기 위해 props를 전달하는 구조이다. 컴포넌트에서 순차적으로 props를 넘겨줘야 하는경우가 실제로도 있다. contextAPI를 통해 전역에서 관리하면 맨처음에서 맨끝으로 한번에 props를 전달해 줄수 있다.
```

 #### useContexts는 context가 있는 내부에서 바로 조회에서 사용할 수 있게 해주는 react hook 이다.


```
import React, { createContext, useContext } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext)
  return <div> 안녕하세요? {text}</div>
}

function Parent({ text }) {
  return <Child text={text} />
}

function GrandParent({ text }) {
  return <Parent text={text} />
}

function ContextSample () {
  return (
    <MyContext.Provider value="Greate" // Provider처리로 MyContext로 값이 설정이 되었다
      <GrandParent text = "Good"/>
    </MyContext.Provider>
  )
}

export default ContextSample
위에처럼 props를 전달받는 구조라면 Mycontext를 최상위 conterxtSample컴포넌트에서 Provider라는 프로퍼티를 사용한후,
text값과 props text를 지워도 child 컴포넌트는"안녕하세요 Great"으로 정상적으로 렌더링 되고 있다
MyContext는 외부파일에서 작성될 수 있고, 또한 어디서든지 불러와서 사용할 수 있다. 
```



# 루트컴포넌트에서 context 

1. App.js 컴포넌트에서 context를 만들고 user 컴포넌트에서 불러와서 사용한다.
2. 핵심은 userList컴포넌트에서는 사용하지 않고 오직 user에서 사용하기 위해 userList컴포넌트를 통해 props를 전달해주는 비효율성을 위함이다.
3. 컨텍스트를 통해 직접 넣어줄수도 있지만, dispatch를 사용한다.
4. useState를 만들어 사용했다면, dispatch가 없고, useDispatch를 만들어서 관리하는게 어려워졌을것이다. (setState도 가능하긴 하지만 깔끔한 구조가 아니다)
5. 특정함수를 여러컴포넌트에 걸쳐 사용해야 한다면 dispath를 관리하는 컨텍스트(UserDispatch)를 만들어서 필요한곳에서 바로 dispatch를 불러와서 사용하면 구조도 깔끔하고 코드작성도 편리하다. 



# immer

1. 배열안에 있는 객체의 프로퍼티값의 변경을 위해서는 스프레드 연산자로 한뎁스 혹은 내부 뎁스에 접근한후, id로 찾은후 불변성을 위해 스프레드 연산자를 통해 복사한후 새로운값은 넣어야한다.
2. 다만 이러한형태는 코드를 보기 어렵게 만든다.
3. immer라는 라이브러리를 통해 내가 복사하지 않아도 불변성유지를 할수있게 해준다.
4. produce에 인자를 넣어주면 함수형 업데이트로써도 사용이 가능하다.
5. 언제 사용하기 좋으냐면, useState를 통해 까다로운 객체를 상태관리를 해주 불변성 관리가 까다로워졌을때 produce에 업데이트를 반환해주는 코드를  사용하면 편리하다.

```
case 'REMOVE_USER':
	return produce(state, draft => {
	const index = draft.users.findInde x(user => user.id === action.id)
	draft.users.splice(index, 1)
})

// produce 업뎅트 함수
const updater = produce(draft => {
	draft.done = !draft.done;
})

const onClick = useCallback(() => {
	setTodo(
		produce(draft => {
			draft.done = !draft.done;
		})
	)
}, [])
```



# styled component

1. CSS in JS: 자바스크립트 안에 CSS를 작성하는것이다.
2. 이쪽에선 가장 인기있는 라이브러리이다. (emotion도 있음)
3. Tagged Template Literal 문법을 사용하고 있다. 

```
Template Literal 문자열안에 자바스크립트 값을 조합할때 사용하는것이다.

const name = 'react';
const msg = `hello ${name}`;

favoriteColors함수의 두번째 파라미터 ...value는 레스트 파라미터 문법을 통해
그뒤에 오는 모든 파라미터를 value라는 배열안에 다 담겠다라는 의미
```

<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210102224908811.png" alt="image-20210102224908811" style="zoom:50%;" />



레스트 파라미터와 {}

스프레드 문법



# mashup-todolist

#### 컴포넌트

1. TodoTemplate : 레이아웃, 페이지 중앙에 박스
2. TodoHead:  날짜, 해야할일 남은 갯수
3. TodoList: 할일 목록, todos 배열에서 todoitem 컴포넌트를 렌더링
4. TodoItem: 각 할일, 완료여부 토글(체크시 아이콘과 글씨 색깔 변화), 마우스를 올리면 휴지통 아이콘이 나타나고 누르면 삭제됨
5. TodoCreate: 새 할일 등록, 렌더링하면 하단부에 초록색버튼, 클릭하면 할일을 입력할수있는 form이 나타나고 버튼이 다시 누르면(또는 버튼) 폼 사라진다 

![image-20210103160327463](/Users/igayeong/Library/Application Support/typora-user-images/image-20210103160327463.png)



- props가 아닌 컨텍스트를 통해 상태관리를 하게된다면

![image-20210103160522702](/Users/igayeong/Library/Application Support/typora-user-images/image-20210103160522702.png)







# API 연동하기

1. 데이터를 브라우저에서 사용자 뿐만 아니라 다른사람들도 보려면 API 서버를 만들어 연동해서 데이터를 읽고 써야한다.
2. 주로 리덕스 라이브러리를 이용한다.



### 비동기 통신

1. api 작업은 비동기로 이루어지기 때문에, 비동기 원리에 대해 이해해야 한다.
2. setTImeout은 대표적인 비동기함수로써, 0으로 설정해도 브라우저 최소 지정값인 4ms후에 실행된다.

```
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i<10000000; i++) {

    }
    const end =Date.now();
    console.log((end - start + 'ms'));
  }, 0) 
  //  실제로는 4ms 후에 실행됨(브라우저가 지정한 최소시간)
}
console.log('작업시작');  // 1 
work(); // 3
console.log('다음 작업'); // 2

```

#### 비동기 처리가 끝난후 새로운 작업을 해주고 싶다면, 콜백함수를 파라미터로 전달하면, 특정작업이 끝난후 호출해준다.

<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210110172826730.png" alt="image-20210110172826730" style="zoom: 50%;" />

![image-20210110172855365](/Users/igayeong/Library/Application Support/typora-user-images/image-20210110172855365.png) 



#### 비동기를 주로 하는 작업

<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210110172654059.png" alt="image-20210110172654059"  textalign="left" />



# Promise

1. 비동기 작업을 좀 더 편하게 처리할 수 있도록 ES6에 도입되었다.
2. 이전에는 비동기작업을 처리후 뭔가를 해야할때 콜백함수로 처리하였어야 했는데, 비동기작업이 많아질 경우에는 코드가 난잡해졌다.
3. 원래는 라이브러리였다가, ES6에 정식으로 도입되었다.
4. 코드가 많아져도 훨씬 깔끔한 편이다.
5. 하지만 어디서 에러가 난건지 찾기 어렵고, 분기처리도 어렵다. (then으로 이어지기 때문에)

```
성공했을때는 resolve, 실패했을때는 reject
let myFirstPromise = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve("Success!"); // Yay! Everything went well!
	}, 250);
});
myFirstPromise.then(아무변수명 => {
	console.log(아무변수명) // "Success!"
})
```



# async await

1. Promise 사용을 더욱 쉽게 해준다.
2. 앞부분엔 async를 붙여주고 Promise앞엔 await을 붙여준다.
3. Promise 기다리는 작업을 .then을 안하고 그냥 await으로 기다리면 된다.
4. 분기점을 만드는것이 쉽고, 값이나 변수를 공유하는것도 쉽다.
5. 로직을 작성하기 편해진다.
6. 결과물은 Promise를 반환한다.
7. 에러를 발생할때에는 throw, 에러를 잡아낼때에는 try, catch문을 사용한다. 

![image-20210111204648880](/Users/igayeong/Library/Application Support/typora-user-images/image-20210111204648880.png)

 

# 리액트에서 API 연동

- axious : REST API 요청시 Promise 기반으로 처리할 수 있게해주는 라이브러리 이다.

- REST API : 클라이언트와 서버가 소통하는 방식이다. 
 (HTTP 메서드로 구분한다, get, post, put, delete)

<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210111132751436.png" alt="image-20210111132751436" style="zoom:100%;" />

![image-20210111133028900](/Users/igayeong/Library/Application Support/typora-user-images/image-20210111133028900.png)





### 컴포넌트에서 API 요청해보기

1. useState와 useEffect로 데이터 로딩하기



#### API를 요청할땐 3가지 상태를 관리해야 한다.

1. 요청의 결과
2. 로딩 상태
3. 에러



> useReducer에 경우, dispatch를 미리 만들어놓은 reducer함수에게 보낸다.

```
// 초기값 설정, 현재 상태와 보낼때 프로퍼티 설정
 const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  })
  
// 상황별로, 초기값이 어떻게 변하는지 설정
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
  
// 함수가 실행됨에 따라 데이터를 dispatch해서 reducer에 보냄
 const fetchUsers = async () => {
    dispatch({ type: 'LOADING'})
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/'
      );
      dispatch({type: 'SUCCESS', data: response.data })
    } catch (e) {
      dispatch({type: 'ERROR', error: e})
    }
  }
```

- useReducer 를 사용함에 따라 reducer 함수에 의해 코드가 길어진것 같지만 컴포넌트를 분리하여 재사용 할수 있다는 장점이 있다.



# useAsync 커스텀 Hook

```
// callback: api 호출하는 함수를 넣어줄것
// deps: 나중에 useEffect를 사용해서 컴포넌트가 로딩됐을때, 혹은 어떤값이 변경됐을때 api를 재요청할건데 그때 deps에 값을 그대로 사용할 예정이다.

function useAsync(callback, deps = []) {

}

// api통신할때마다 함수는 새로 만들어 진다.
// useCallback을 활용하면 한번만 만들어서 api호출시에도 재사용 할수있다. (최적화)
```



> 다음줄에 **eslint **규칙 무시하고 싶을때 : *eslint-disable-next-line* 



# react-async

1. useAsync를 사용할 수 있는 라이브러리 이다.
2. 간단하지만 옵션이 좀 복잡하다.
3. custom Hook이 어렵다면 사용하는것도 좋다.

```
// 공식 사용법
import { useAsync } from "react-async"

const loadCustomer = async ({ customerId }, { signal }) => {
  const res = await fetch(`/api/customers/${customerId}`, { signal })
  if (!res.ok) throw new Error(res)
  return res.json()
}

const MyComponent = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadCustomer, customerId: 1 })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    return (
      <div>
        <strong>Loaded some data:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  return null
}

[], true: 컴포넌트가 처음 렌더링될때 실행되는것은 생략
const [state, refetch] = useAsync(getUsers, [], true)

  // const  {data: users, error, isLoading, reload, run } = useAsync({
    // promiseFn: getUsers
    // deferFn: getUsers  
    // 처음 로당되었을때 데이터를 불러오지 않는것
```



# Context에서 비동기

1. 특정 컴포넌트만 필요한 외부데이터는 useAsync같은 훅을 통해 사용할 수 있다.
2. 특정 데이터가 다양한 컴포넌트에서 필요한 경우도 있다. (예시: 현재 로그인중인 사용사의 정보를 다양한 곳에서 필요한 경우)
3. 여기저기서 비동기적인 상태가 필요한 경우엔, 데어터를 컨텍스트에 넣어 관리하면 편하다.

```
// useContext를 통해 사용할 수도 있지만,커스텀 hook을 만들면 다른 컴포넌트들에서 사용할때 더 간편하다.
// app.js > Provider로 감싸주어야만 context에서 만든 커스텀hook을 사용할 수 있다.

// 아래의 함수들로 단순히 api요청뿐만 아니라, api를 요청 하기전에 특정 액션을 dispatch하고,
// api가 성공하거나 실패했을때도 특정액션을 dispatch한다.
// dispatch는 추후 파라미터에 받아와서 사용할 것이다.

export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    dispatch({
      type: 'GET_USERS_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USERS_ERROR',
      data: e
    })
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: 'GET_USER_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USER_ERROR',
      data: e
    })
  }
}
```



# 리액트 라우터

> SPA (Single Page Aplication) : 라우팅을 클라이언트가 담당



### 라우팅

1. 어떤 주소에 어떤 UI를 보여줄지 규칙을 정하는 것
2. 예전에는 거이 서버쪽에서 작업하였지만, SPA가 되면서 클라이언트쪽에서 작업
3. 서버에선 자원을 많이 아낄수 있고, 사용자 경험이 좋아졌다.



### SPA 단점

1. 앱의 규모가 커지면 JS파일의 크기가 너무 커진다. (Code Splitting으로 해결)
2. 브라우저에서 자바스크립트가 구동되지 않음 UI를 볼수 없다. (SSR으로 해결)
3. 컴포넌트 만들어 props로 설정한다.



### 리액트 라이브러리

1. 리액트 라이브러리: 컴포넌트를 기반으로 라우팅을 한다.
2. Next.js: 서버사이드 렌더링을 엄청나게 쉽게 구현 가능, 단 파일경로와 이름으로 라우팅을 한다.



### 라우터 종류

1. 브라우저 라우터: HTML5 History API 사용하며 주소만 바꾸고 페이지를 다시 불러오진 않는다.(SPA)
2. 해쉬 라우터: 예전방식, #을 붙임
3. 메모리 라우터: 브라우저의 주소와 무관함 따라서 리액트 네이티브나 임베디드 웹앱등 브라우저와 상관없는곳에서 사용하기 좋다.
4. 스태틱 라우터 : 서버사이드 렌더링을 할때 사용하기 좋음
5. 라우트: 라우트를 정의할때 사용하는 컴포넌트
6. 링크: 사용한 라우터의 주소를 바꿈, a태그지만 새로고침 안됨

![ ](/Users/igayeong/Library/Application Support/typora-user-images/image-20210116121032479.png)

 

![image-20210116121252078](/Users/igayeong/Library/Application Support/typora-user-images/image-20210116121252078.png)

<코드 스플리팅>
![image-20210116121620590](/Users/igayeong/Library/Application Support/typora-user-images/image-20210116121620590.png)



# 파라미터와 쿼리

![image-20210117153235756](/Users/igayeong/Library/Application Support/typora-user-images/image-20210117153235756.png)



1. url 파라미터이건 query건 값을 불러올땐 문자열로 온다는것이다.
2. query를 파싱할땐 qs라이브러리를 사용한다.
3.   About컴포넌트에서 location search에 있는 쿼리 스트링을 파싱해서 디테일 값을 불러왔고  detail값이 true라면 보여주겠다.

```
const About = ({ location }) => {
  const query = qs.parse(location.search, {
		// 역할은 앞에 물음표값을 제외시킬수있다.
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

http://localhost:3001/about?detail=true (url)
```



# 서브 라우트

1. 라우트 컴포넌트 내부에서 라우트 컴포넌트를 한번더 쓰는 개념이다.
2. 특정 라우터에 탭이 있는경우 블로그에 태그 링크에 사용하면 편리하다.
3. render 프로퍼티를 사용하여 함수형 컴포넌트를 바로 선언해서 사용해줄 수 있다.



#### 라우트 컴포넌트의 프로퍼티

> exact :  (exact는 true라는 의미) 정확한 주소만을 렌더해주는 역할
>
> render: 함수가 아닌 함수형 컴포넌트를 바로 넣어 사용할 수 있다.
>
> component: {컴포넌트이름 } 을 넣어주면 렌더링 된다.
>
> match: 다른 컴포넌트에서 별도의 설정없이 라우트 컴포넌트의 프로퍼티를 받아 사용할 수 있다. (match, location)



# 리액트 라우터의 부가기능

1. history 객체 : 라우터로 사용되는 컴포넌트에게 pros로 전달된다.  또한 컴포넌트에서 라우터에 직접 접근이 가능하다.

```
{length: 50, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
action: "POP"// 
block: ƒ block(prompt) // 실수로 페이지 이탈을 방지하기 위한 모달창 기능
createHref: ƒ createHref(location)
go: ƒ go(n) // 뒤로나 앞에가기
goBack: ƒ goBack()
goForward: ƒ goForward()
length: 50 // 방문 길이
listen: ƒ listen(listener)
location: {pathname: "/history", search: "", hash: "", state: undefined, key: "dfzlfp"} // 현재 위치
push: ƒ push(path, state) // 특정 주소 이동
replace: ƒ replace(path, state) // 방문 기록을 남기지 않는 특정 주소 이동
__proto__: Object
```



#### withRouter

1. 하나의 함수이다. 
2. 라우트 컴포넌트가 아닌곳에서 (match, location, history) 를 props로 받아와서 사용이 가능하다
3. match, location의 차이점은 location는 어디서나 똑같이 불러오는데 .match현재 컴포넌트가 렌더링된 기준으로 불러온다
<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210117181325173.png" alt="image-20210117181325173" style="zoom:50%;" />



### switch 컴포넌트

1. switch컴포넌트를 사용하면 여러가지 라우터중에서 가장먼저 매치된 라우터 하나만을 보여준다. 

2. not Found 상황에서 페이지를 못찾을때 사용하면 유용하다.

   

### NavLink 컴포넌트

1. Link랑 비슷한데, 현재 주소와 일치한다면 특정 스타일을 지정해 줄수 있다.



### 다른 컴포넌트들

- Prompt : history 에서 block을 컴포넌트 형태로 구현하는것 (https://reactrouter.com/core/api/Prompt) // 공식메뉴얼

  

# useReactRouter

1. hook을 통해 history, match, location 사용하기
2. 정식탑재되진 않아, 라이브러리를 사용해야 하지만, withRouter보다 사용하기 편리하다



# 리덕스

1. 상태관리 라이브러리 이다.
2. 상태관리 로직들을 다른 파일들로 분리시켜서 더욱 효율적으로 관리 가능하다.
3. 글로벌 상태관리도 손쉽게 할수 있다.
4. Context API도 글로벌 상태관리를 할수있고, 로직도 분리할 수 있다.
5. Context API + useReducer 가 리덕스와 매우 유사하다.
6. 리덕스에서도 reduce와 액션이라는 방식을 사용한다.
7. 리액트에서 사용하기 위해 만들어졌지만, 자바스크립트나 앵귤러 환경에서도 사용가능하다.



#### Context와의 차이점

1. 리덕스에는 미들웨어가 있다. 가장 큰 장점은 비동기를 체계적으로 관리할 수 있다.

   ![image-20210118141621040](/Users/igayeong/Library/Application Support/typora-user-images/image-20210118141621040.png)

2. 리덕스에서 유용하게 쓸수 있는 함수나 Hook이 있다.
   1. connect: 전형적인 상태, action을 dispatch하는  그런 함수들을 props로 받아와서 쓸수 있다.
   2. useSelector, useDispatch, useStore: 상태를 쉽게 조회하거나 action을 쉽게 dispatch할수 있다.
3. 직접 만들어서 사용하지 않고, 만들어져있는것을 사용할 수 있다.
4. 최적화가 이미 되어있다.
5. Context는 기능부분별 Context를 만들어서 사용하는게 일반적이다.
6. 모든 글로벌 상태를 하나의 객체에 넣어서 사용하는것이 필수이다.
7. DevTools: 현재상태를 한눈에 볼수있고, 어떤 변화가 있었는지 볼수있고, 특정상태로 되돌릴수도 있다.
8. 이미 사용중인 프로젝트가 많다. 



#### 리덕스를 언제 사용하면 좋을까?

1. 프로젝트 규모가 크다.
2. 비동기 작업을 자주한다. (체계적)
3. 리덕스가 편하게 느껴진다. (불편하면 Context API나 MobX)



#### 불변성을 지키며 객체를 복사하는 방법

1. 스프레드 연산자
2. Object.assign
3. concat



#### 불변성을 지키는 함수

- concat, filter, map, slice
- X : push, splice, reverse



# 리덕스 키워드

1. 액션(Action) : 상태의 변화가 필요하게 될때 우리는 액션을 발생시키며, 하나의 객체이이다. 타입값이 필수적이다. 나중에 리덕스에서 타입을 보고 어떻게 업데이트 할지 정하며, 타입외에 다른값도 넣어줄 수 있다. 어떻게 업데이트 해야 해야 하는지 정의(정보)하는 객체라고 보면 된다.
2. 액션 생성함수(Action Creator): 단순히 파라미터를 받아와서 액션객체를 만들어주는 함수이다. 화살표 함수로도 만들어 줄수 있다. 리덕스에선 필수적이진 않지만, 편리하게 액션을 만들수 있고, 액션 생성함수를 사용하지 않는다면, 직접 액션객체를 작성해주면 된다.
3. 리듀서(Reducer): 변화를 일으키는 함수이며, 두가지 파라미터를 가져온다.(state, action) 액션타입이 무엇이냐에 따라 다른 업데이트 작업을 한다. 리듀서에서는 불변성을 꼭 유지해 줘야 한다. 객체라면 기존의 객체를 복사한후, 새로운 객체를 반환해줘야 된다. default에 일반적으로 에러를 발생시켜야 하지만, 리덕스에 리듀서에서는 기존의 state를 반환하는 형태이다. 왜냐하면 여러개의 리듀서를 만들고 루트리듀서라는걸 작성할수도 있다. 그안에 리듀서는 서브리듀서라 부른다.
4. 스토어(Store): 리덕스를 사용하게 되면 한 애플리케이션당 하나의 스토어를 만들게 되는데 (규칙) 스토어 안에는 현재앱의 상태와 리듀서가 들어있고 추가적으로 몇개의 내장함수가 들어있다. 그중하나가 dispatch이며, 액션을 발생시킨다. 또는 액션을 스토어에게 전달한다.
5. 디스패치(dispatch): 액션객체를 만든후 dispatch에 넣어서 호출해주는 형태이다. 호출하게 되면, 리듀서에게 전달되어 리듀서 함수에서 새로운 함수를 반환해주면 스토어 상태가 새로워 진다.
6. 구독(subscribe): 스토어에 내장함수중 하나이며, 호출할때 파라미터로 특정함수를 넣어주면 액션이 dispatch될때마다 우리가 설정한 함수가 호출된다. 이를 통해 스토어의 상태가 업데이트 될때마다 특정함수를 호출할수 있다는 의미이다. 리액트에서 리덕스를 사용할때 직접 사용하는 일은 잘 없고, 대신 reduct-react 라이브러리에서 제공하는 connect함수, useSelector 훅을 사용해서 스토어에 있는 상태가 업데이트되면, 컴포넌트가 리렌더링 되는 작업을 대신 처리해준다. 컴포넌트를 만들게 되면, 컴포넌트가 리덕스에 구독을 하게되며 리덕스의 상태가 업데이트되면 컴포넌트도 리렌더링 된다.



# 리덕스의 3가지 규칙

1. 하나의 애플리케이션엔 하나의 스토어가 있다.

2. 상태는 읽기전용이다. (즉 불변성을 지켜주어야 한다.) 

3. 변화를 일으키는 함수 리듀서는 순수한 함수여야 한다.

   ![image-20210118171615404](/Users/igayeong/Library/Application Support/typora-user-images/image-20210118171615404.png)


   안되는것 (값이 바뀌면 아니된다.)
   ![image-20210118171703410](/Users/igayeong/Library/Application Support/typora-user-images/image-20210118171703410.png)

   만약 위 함수나 비동기처리를 해야한다면 컴포넌트단이나, 미들웨어에서 처리해야 한다.



# learn-redux.js

![image-20210122003655322](/Users/igayeong/Library/Application Support/typora-user-images/image-20210122003655322.png)

리덕스에서 초기상태를 만들때 리듀서 함수를 한번 호출한다.` undefined` 이면 동작하기 어렵기 때문에, 초기상태를 설정해 주어야 한다.



![image-20210122004010965](/Users/igayeong/Library/Application Support/typora-user-images/image-20210122004010965.png)

스토어를 만들어준후, 조회하기



![image-20210122004723810](/Users/igayeong/Library/Application Support/typora-user-images/image-20210122004723810.png)

1. 초기상태 만들기
2. 스토어에 구독을 하기 위해서 listener 함수 만들기
3. listener 함수를 스토어에 구독하기
4. 구독을 해지하고 싶을땐 unsubscribe 호출하기
5. useSelector액션들 dispatch 하기
6. 특정 액션이 dispatch 되면 상태가 업데이트 되고, 업데이트 되면 구독했던 함수가 호출된다.



<img src="/Users/igayeong/Library/Application Support/typora-user-images/image-20210122005253968.png" alt="image-20210122005253968" style="zoom: 50%;" />

`window.store = store;` // store 인스턴스 콘솔에서 사용하기



# 리덕스 모듈

1. 다음의 항목(액션타입, 액션 생성 함수, 리듀서 )이 들어있는 자바스크립트 파일을 의미한다.
2. 리덕스 공식 github에선 각각의 파일에 나누어 작성하였다.
3. 한파일안에 모두 작성하는것을 Docks 패턴이라고 한다.



####  Docks 패턴 규칙



# 리덕스 패턴 

#### 프리젠테이션 컴포넌트

1. 주로 UI를 선언하는것에 집중한다.
2. 필요한 값이나 함수는 주로 props로 받아와서 사용한다.



#### 컨테이너 컴포넌트

1. 리덕스의 상태를 조회하거나 액션을 디스패치할수 있는 컴포넌트를 의미한다.
2. 상태를 조회할때는 useSelector를 사용한다.



![image-20210122184218423](/Users/igayeong/Library/Application Support/typora-user-images/image-20210122184218423.png)

#### useSelector

1. 상태를 조회하는 Hook이다.

2. 해당 함수의 파라미터(state)에선  리덕스의 상태다
3. 리덕스의 상태중 number, diff를 가져온것 이다.



#### useDispatch 
1. 액션을 디스패치할때 사용하는 Hook이다.
2. 그럼 dispatch함수를 사용할 수 있고, 액션을 만들어 dispatch해준다.



![image-20210122185510234](/Users/igayeong/Library/Application Support/typora-user-images/image-20210122185510234.png)

1. 프레젠테이션 컴포넌트에서는 단순히 UI에 집중하였다.
2. 컨테이너 컴포넌트에서 리덕스 스토어 상태를 불러오고, 디스패치 작업도 처리하였다.
3. 프리젠테이션에선 필요한 props를 받아와 처리하였다.
4. 컨테이너 컴포넌트와 프리젠테이션 컴포넌트를 분리해서 사용하면 프리젠테이션 컴포넌트의 재사용성을 높여줄 수 있다.
5. 관심사를 분리할수 있기 때문에 유용한 패턴이다.