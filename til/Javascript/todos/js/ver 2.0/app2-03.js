let todos = [
  { id: 1, content: 'HTML', completed: true, obj: { name: 'rrb'} },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
let navState = 'all';
let _todos = [...todos];
const $nav = document.querySelector('.nav');
const $searching = document.querySelector('.input-todo');
const $activeLeng = document.querySelector('.active-todos');
const $completLeng = document.querySelector('.completed-todos');

function render() {
  // 여러가지의 상태가 유지되려면 객체를 복사해야한다. (불변성)

    if(navState) _todos = todos;
    if(navState === 'active') _todos = todos.filter(todo => !todo.completed)
    if(navState === 'completed') _todos = todos.filter(todo => todo.completed);

  let html = '';
  _todos.forEach(({id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
  })
  $todos.innerHTML = html;
  $activeLeng.innerHTML = todos.filter(todo => !todo.completed).length;
  $completLeng.innerHTML = todos.filter(todo => todo.completed).length;
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1
}

$searching.addEventListener('keydown', e => {
  if(e.keyCode !== 13) return
  todos = [{ id:generateId(), content: e.target.value, completed: false }, ...todos]
  e.target.value = '';
  render();
})

// active checked change와 todos 배열 바인딩
$todos.addEventListener('change', e => {
  let id = +e.target.parentNode.id;
  todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  render();
})


// active 이벤트
$nav.addEventListener('click', e => {
  [...$nav.children].forEach(navItem => {
    if(navItem.id === e.target.id) navItem.classList.add('active')
    else navItem.classList.remove('active');
  })
  navState = e.target.id;
  render();
})

render();