let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $completTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $inputTodo = document.querySelector('.input-todo');
const $allCompleteBtn = document.querySelector('.complete-all');
const $clearBtn = document.querySelector('.btn');

// 숫자값을 구해 innerHTML로 바로 보여지게 하면된다
// 완료된 todo 갯수
function clearTodos() {
  $completTodos.innerHTML = todos.filter(todo => todo.completed).length
}
// 완료되지 못한 todo 갯수
function leftTodos() {
  $activeTodos.innerHTML = todos.filter(todo => !todo.completed).length
}

// 렌더링
function render() {
  // 변수에 할당하고 innerHTML을 해야 새로 그려진다.
  // todos.innerHTML을 바로 하게되면 todos 배열이 보여진 상태에서 쌓이게 된다.
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html +=  `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
  })
  clearTodos();
  leftTodos();
  $todos.innerHTML = html;
}

// 숫자값(length)을 구해야 한다.
// 배열의길이를 확인하후 id값중 가장 큰 숫자를 가져온다
// length값이 없는경우 1을 넣어 id값을 새로 부여하고, 값이 있다면 +1을 더해 새로운 id고유값을 부여한다.
function generateId() {
  //  truthy & falsthy 값으로만 나오면 삼항연산자 사용 가능하다.
  //  map과 filter 무조건 배열을 반환하며, 값을 꼭 변수에 할당하지 않아도 된다.
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// 엔터를 쳤을때, 내가 입력한 값이 todolist <li>태그 안에 들어가야한다.
//// todos배열안에 객체가 하나더 추가된후, render함수를 실행하여 리스트가 보이게 한다.
// 입력과 동시에 검색창에 입력한 글자는 지워져야 한다.
// 단, 엔터가 아니거나 빈글자의 경우 아예 코드가 진행되지 말아야 한다.
$inputTodo.addEventListener('keydown', e => {
  const content = e.target.value.trim();
  
  if(e.keyCode !== 13 || content === '') return;
  todos = [{ id: generateId(), content, completed: false },...todos]
  e.target.value = '';
  render();
})

// ** 체크박스를 클릭함에 따라 클릭한 정보가 반영되어 새로 렌더링 
// 새로고침은 없음
// 현재는 배열의 complete값이 반영되어 input의 checked속성이 반영되어 있지만,
// (todos배열과 checked가 연결)
// 내가 동작하는 이벤트를 todos배열에 바인딩하여 내가하는 동작을 보여지게 한다.
$todos.addEventListener('change', e => {
  const id = +e.target.parentNode.id
  // DOM 메소드의 경우 string으로 넘어와서, 숫자형으로 형변환을 해줘야 하는경우가 많으니 참고해야 한다.

  // number형을 비교할 땐, 삼항연산자를 통해 값을 비교하는것이 많이 사용된다.
  todos = todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
  render();
})

// 전체선택 버튼 makr all complete
$allCompleteBtn.addEventListener('change', e => {
  // if(true) 조건식을 넣으면 else 일때 작동하지 않는다. 당연하다 그럼 flase일때 동작하란 소리인데 flase일때는 동작하지 않는다.
  // console.log(e.target.checked)
  if (e.target.checked) todos = todos.map(todo => ({...todo, completed: true}))
  else todos = todos.map(todo => ({...todo, completed: false}))
  render();
});

// x버튼 클릭시 삭제
$todos.addEventListener('click', e => {
  const removeBtn = e.target.classList.contains('remove-todo');
  const id = +e.target.parentNode.id;
  
  if(!removeBtn) return;
  todos = todos.filter(todo => todo.id !== id)

  render();
})

// clearBtn 클릭시 완료된 목록 삭제
// todos목록에서 complete가 true가 아닌것을 filter하여 렌더링한다.
$clearBtn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed === true)
  render();
})


render();

