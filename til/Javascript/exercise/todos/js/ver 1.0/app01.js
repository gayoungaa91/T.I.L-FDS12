let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $completeLeng = document.querySelector('.completed-todos');
const $uncompleteLeng = document.querySelector('.active-todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $removeBtn = document.querySelector('.remove-todo');
const $clearBtn = document.querySelector('.btn');


// 완료돤 todo 갯수
function complete() {
  $completeLeng.innerHTML = todos.filter(todo => todo.completed).length;
}

// 완료되지 않은 todo 갯수
function uncomplete() {
  $uncompleteLeng.innerHTML = todos.filter(todo => !todo.completed).length;
}

// 렌더링
function render() {
  let html = '';
  todos.forEach(({id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  });
  $todos.innerHTML = html;
  complete();
  uncomplete();
}

// 아이디 생성
function generateId() {
  return todos.length + 1;
}

// 새로운 todo 추가
$inputTodo.addEventListener('keydown', e => {
  const content = $inputTodo.value.trim();
  if(e.keyCode !== 13 || content === '') return;

  todos = [{ id: generateId(), content, completed: false },...todos];
  $inputTodo.value = '';
  render();
})

// 체크박스 클릭에 따라 complete 숫자 변화
$todos.addEventListener('click', e => {
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (id === todo.id ? {...todo, completed: !todo.completed} : todo))
  render();
})

// 전체선택
// 'change'는 input에 cheeked에만 적용되는 속성이다.
$completeAll.addEventListener('change', e => {
  if(e.target.checked) todos = todos.map(todo => ({...todo, completed: true}));
  else todos = todos.map(todo => ({...todo, completed: false}))
  render();
})

// x버튼 클릭시 todo 삭제
$todos.addEventListener('click', e => {
 if(!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id) 
  render(); 
})

// clear completed버튼 클릭시 완료목록 삭제
$clearBtn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed)
  render();
})

render();
