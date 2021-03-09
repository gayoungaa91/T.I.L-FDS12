let todos = [
  { id: 1, content: 'HTML', completed: true, obj: { name: 'rrb' } },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const TODOS = document.querySelector('.todos');
const INPUT = document.querySelector('.input-todo');
const COMPLETED_TODOS = document.querySelector('.completed-todos');
const LEFT_TODOS = document.querySelector('.active-todos');
const COMPLETED_ALL = document.querySelector('#ck-complete-all');
const CLEAR_BTN = document.querySelector('.btn');
const REMOVE_TODO = document.querySelector('.remove-todo');
console.log(REMOVE_TODO);

function generateID() {
  return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
}

INPUT.addEventListener('keyup', (e) => {
  if (e.keyCode !== 13 || e.target.value === '') return;
  todos = [
    { id: generateID(), content: e.target.value, completed: false },
    ...todos
  ];
  console.log(todos);
  e.target.value = '';
  render();
});

COMPLETED_ALL.addEventListener('change', (e) => {
  e.target.checked
    ? (todos = todos.map((todo) => ({ ...todo, completed: true })))
  render();
});

TODOS.addEventListener('change', (e) => {
  const id = +e.target.parentNode.id;
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  render();
});

CLEAR_BTN.addEventListener('click', (e) => {
  todos = todos.filter((todo) => !todo.completed);
  render();
});

function render() {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
          <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${
      completed ? 'checked' : ''
    } />
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });
  TODOS.innerHTML = html;
  COMPLETED_TODOS.innerHTML = todos.filter((todo) => todo.completed).length;
  LEFT_TODOS.innerHTML = todos.filter((todo) => !todo.completed).length;
}
render();
