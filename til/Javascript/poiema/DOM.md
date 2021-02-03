## DOM (Document Object Model)

- 텍스트 파일로 이루어진 문서를 브라우저는 **1. 웹문서를 로드한 후, ** **2. 파싱하여** **3. 웹문서를 브라우저가 이해할 수 있는 구조로 메모리에 적재** 하는것을 말한다.

- 모든 **요소** 와 **요소의 어트리뷰트** , **텍스트** 를 각각의 객체로 만들고 이들의 부자관계를 트리구조로 표현한것이다.

- 자바스크립트에 의해 동적으로 변경할 수 있으며 변경된 DOM은 렌더링에 반영된다.

- **정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경하기 위한 유일한 방법은 DOM을 변경하는 것이다.**

- **DOM에 접근하고 변경할 수 있는 프로퍼티와 메소드의 집합인 DOM API**이다. 

  ![image-20191206012800600](/Users/igayeong/Library/Application Support/typora-user-images/image-20191206012800600.png)



### DOM tree

- HTML 문서를 로드한 후 파싱하여 각각의 객체들을 트리처럼 구조화한 것을 말한다.

- DOM에서 요소, 어트리뷰트, 텍스트는 하나의 객체이며 트리처럼 부자관계를 표현한다.

	![image-20191206013905153](/Users/igayeong/Library/Application Support/typora-user-images/image-20191206013905153.png)

> 문서 노드 (Document Node)

- 트리의 최상위, DOM트리에 접근하기 위한 시작점이다.



> 요소 노드 (Element Node)

- HTML 요소를 표현하며, 부자관계를 가지며 HTMLElement객체를 상속한 객체로 구성된다.



> 어트리뷰트 노드 (Attribute Node)

- HTML 요소의 어트리뷰트를 표현하며, 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.



> 텍스트 노드 (Text Node)

- HTML 요소의 텍스트를 표현하며 DOM tree의 최종단이다.



### DOM Query

#### 1. 하나의 요소 노드 선택

#### `document.getElementById(id)`

- id 어트리뷰트 값으로 요소 노드 한 개 선택한다. 복수로 선택된 경우, 첫번째 요소만 반환한다.
- Return : HTMLElement 를 상속받은 객체
- 모든 브라우저에서 동작



#### `document.querySelector(css)`

- CSS 셀렉터를 사용하여 요소 노드 한 개 선택한다. 복수로 선택된 경우, 첫번째 요소만 반환한다.
- Return : HTMLElement 를 상속받은 객체
- IE8 이상의 브라우저에서 동작



#### 2. 여러개의 요소 노드 선택

#### `document.getElementByClassName(class)`

- class 어트리뷰트 값으로 요소 노드를 모두 선택한다. 공백으로 구분하여 여러 개의 class를 지정할 수 있다.
- Return : HTMLCollection(live) 
- IE9 이상의 브라우저에서 동작

