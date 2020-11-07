let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

let $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
// // let checkBox = document.createElement('')
// let list = document.createElement('li');
// // console.log($ul)

// completed 개수
function completedTodos() {
  document.querySelector('.completed-todos').innerText = todos.filter(todo => todo.completed).length;
}

// !completed 개수
function unCompletedTodos() {
  document.querySelector('.active-todos').innerHTML = todos.filter(todo => !todo.completed).length
}


// 렌더링
function renderTodos() {
  let html = '';
  todos.forEach(({id, content, completed}) => {
    html += `<li id=${id} class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
  })

  $todos.innerHTML = html;
  
}

// todolist 새로 추가
  $input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      $todos.innerHTML = `
      <li id="myId" class="todo-item">
        <input class="custom-checkbox" type="checkbox" id="ck-myId">
        <label for="ck-myId">${$input.value}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>
      `
    }
  })


renderTodos();



