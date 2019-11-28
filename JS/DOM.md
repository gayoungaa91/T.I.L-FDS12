## DOM (Document Object Model)

- 웹문서를 로드한후, 파싱하여 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는걸 말한다.
- 어트리뷰트, 텍스트 각각의 요소들을 객체로 만들고 부모-자식간의 관계를 트리구조로 구성한 것이다.
- 자바스크립트를 통해 동적으로 변경할 수 있다.
- **최종점은 요소의 텍스트를 나타내는 객체이다.** 



### DOM Query / Traversing (요소에의 접근)



#### 여러개의 요소 노트 선택

##### 	`document.getElementsByClassName(class)`

- 반환값은 HTMLCollection이다.
- 복수인경우, 배열과 비슷한 사용법인 객체 **유사배열** 이다.
- 실시간으로 Node의 상태변경을 반영한다,
- 



### DOM 탐색

##### 	`parentNode`

- 부모 노드를 탐색한다.
- 모든 브라우저에서 동작



*`firstChild` ,  `lastChild`  보단,*

##### 	`firstElementChild` , `lastElementChild`

- 자식 노드를 탐색한다.
- IE9 이상의 브라우저에서 동작



##### 	`hasChildNodes()`

- 자식 노드가 있는지 확인하고 Boolean 값을 반환한다.
- Return Boolean 값



##### 	`childNodes`

- 자식 노드의 컬렉션을 반환한다. **텍스트 요소를 포함한 자식요소를 반환한다.**
- Return NodeList
- 모든 브라우저에서 동작



##### 	`children`

- 자식 노드의 컬렉션을 반환한다. **자식 요소 중에서 Element type 요소만을 반환한다.**
- Return HTMLCollection
- IE9 이상의 브라우저에서 동작



##### 	`previousSibling` , `nextSibling`

- 형제 노드를 탐색한다. **text node를 포함한 모든 형제 노드를 탐색한다.**
- Return HTMLElement를 상속받은 객체
- 모든 브라우저에서 동작



##### 	`previousElementSibling`, `nextElemetnSibling`

- 형제 노드를 탐색한다. 형제 노드 중에서 Element type 요소만을 탐색한다.
- Return HTMLElement를 상속받은 객체
- IE9 이상의 브라우저에서 동작



### DOM 조작

#### 1. 텍스트 노드에 접근/수정 방법

1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.
2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
3. 텍스트 노드의 유일한 프로퍼티(`nodeValue`)를 이용하여 텍스트를 취득한다.
4. `nodeValue` 를 이용하여 텍스트를 수정한다.



##### 	`nodeValue`

- 노드의 값을 반환한다.
- Return 텍스트 노드의 경우는 문자열, 요소 노드의 경우 null 반환
- IE6 이상의 브라우저에서 동작한다.
- **`nodeName`, `nodeType`을 통해 노드의 정보를 취득할 수 있다.**



#### 2. 어트리뷰트 노드에 접근/수정 방법

##### 	`className`

- `class ` 값을 취득 또는 변경한다.
- `class` 값이 여러개일 경우, 공백으로 구분된 문자열이 반환되므로 String 메소드 `split(' ')` 을 사용하여 배열로 변경하여 사용한다.
- 모든 브라우저에서 동작한다.



##### 	`classList`

- `add`, `remove`, `item`, `toggle`, `contains`, `replace` 메소드를 제공한다.
- IE10 이상의 브라우저에서 동작한다.



> Window 프로퍼티 
- Window.pageYOffset : `scrollY` 의 다른이름, 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환한다. 둘다 사용 가능하다.
- Window.scrollTo() : 문서의 지정된 위치로 스크롤 한다.
- Window.scroll() : 창을 문서의 특정 위치로 스크롤 한다.




