// todos 배열
// 2deps
let todos = [
  { id: 1, content: 'HTML', completed: true, obj: { name: 'rrb'} },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $btn = document.querySelector('.btn');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearLength = document.querySelector('.completed-todos');
const $activeTodo = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');

// let copyTodos = JSON.parse(JSON.stringify(todos))
// copyTodos[0].id = 1000
// console.log(todos);

// todos 복사
// 원본이 변경되지 않음
let _todos = [...todos];
// li의 id 값
let navState = 'all';
// console.log(navState)

// 렌더링
function render() {
  // 변수에 할당하고 innerHTML을 해야 새로 그려진다.
  // todos.innerHTML을 바로 하게되면 todos 배열이 보여진 상태에서 쌓이게 된다.
  let html = '';

  if(navState === 'all') {
    _todos = todos;
  } else if (navState === 'active') {
    _todos = todos.filter(todo => !todo.completed);
  } else {
    _todos = todos.filter(todo => todo.completed);
  }

  _todos.forEach(({ id, content, completed }) => {
    html +=  `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
  });
  $clearLength.innerHTML = todos.filter(todo => todo.completed).length
  $activeTodo.innerHTML = todos.filter(todo => !todo.completed).length
  $todos.innerHTML = html;
}

// 아이디 생성
// 리턴값은 숫자여야 한다. +1
// 1이 없다면 1을 준다.
function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// 새로운 할일 추가
// 엔터를 친다 // 엔터가 맞는지 체크
// todos의 새로운 배열로 들어간다
// 검색창 내용이 지워진다.
$inputTodo.addEventListener('keydown', e => {
  if(e.keyCode !== 13 || e.target.value === '') return;
  todos = [{ id: generateId(), content: e.target.value, completed: false }, ...todos]
  e.target.value = '';
  render();
})

// 내가 체크함에 따라 todos의 complete 상태 변경
$todos.addEventListener('change', e => {
  // 내가 선택한 요소와 todos배열 요소가 같은지 확인후,
  // todos 배열 요소를 바꿔준다.
  // 이미 todos 배열요소로 렌더링 되고 있기 때문에,
  // 나의 이벤트와 todos배열요소를 연동하면 된다.
  const id = +e.target.parentNode.id
  todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  render();
})

// 카테고리 액티브 클래스
$nav.addEventListener('click', e => {
  // 클릭한요소가 어떤요소인지 컴퓨터가 알게하여 
  // 클래스 active를 주어 불이 들어오게 한다.
  [...$nav.children].forEach((navItem) => {
    if(navItem.id === e.target.id) navItem.classList.add('active');
    else {navItem.classList.remove('active')};
  });

  // id값 할당
  navState = e.target.id;
  render();
})

// 'x' 버튼 클릭시 삭제
// 오류!!! 내가 누른 e.target이 todos에 있는 id가 같은지 컴퓨터가 알수있게 확인
// remove-todo클래스를 눌렀을때만 동작해야함
// remove-todo클래스를 누르지 않았을땐 동작하면 안됨
//  todos에 있는 id가 같은지 컴퓨터가 알수있게 확인
// filter
$todos.addEventListener('click', e => {
  const id = +e.target.parentNode.id;
  if(!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== id)
  render();
})

// 클릭시 전체 선택&해제
// 체크박스가 활성화되면 (checked)
// todos의 complete가 true로 활성화 되야함
// 체크박스가 활성화 해지되면
// 다시 클릭시 complete는 false로 값이 변경되어야 함
$completeAll.addEventListener('change', e => {
  if(e.target.checked) todos = todos.map(todo => ({...todo, completed: true}))
  else todos = todos.map(todo => ({...todo, completed: false}))
  render();
})

// clear complete 버튼 클릭시 complete목록 삭제
$btn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed)
  render();
})

render();
