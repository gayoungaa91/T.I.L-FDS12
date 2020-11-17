// todos 배열
let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $completeLeng = document.querySelector('.completed-todos');
const $activeLeng = document.querySelector('.active-todos');
const $todoAdd = document.querySelector('.input-todo');
const $allComplete = document.querySelector('.custom-checkbox');
const $clearBtn = document.querySelector('.btn');

// todos 복사
let _todos = [...todos];
// li의 id
let navState = 'all';

// 내가 친 목록이 보여야 한다.
//  탭별로 나뉘는 목록을 위해 분기쳐야 한다.
// function render() {
//   let html = '';

//   if (navState === 'all') {
//     _todos = todos;
//   } else if (navState === 'active') {
//     _todos = todos.filter(todo => !todo.completed);
//   } else {;
//     _todos = todos.filter(todo => todo.completed)
//   }
  
//   _todos.forEach(({id, content, completed}) => {
//     html +=  `<li id="my${id}" class="todo-item">
//       <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
//       <label for="ck-$id}}">${content}</label>
//       <i class="remove-todo far fa-times-circle"></i>
//     </li>`
//   })
//   $todos.innerHTML = html;
// }
function render() {
  const _todos = todos.filter((todo) => {
    if (navState === 'active') return !todo.completed;
    if (navState === 'completed') return todo.completed;
    return true;
  });

  let html = '';
  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completeLeng.innerHTML = todos.filter(todo => todo.completed).length;
  $activeLeng.innerHTML = todos.filter(todo=> !todo.completed).length;
}

// 아이디 생성
function generateId () {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// 할일 추가
$todoAdd.addEventListener('keydown', e => {
  if(e.keyCode!== 13 || e.target.value === '') return;
  todos = [ { id: generateId(), content: e.target.value, completed: false }, ...todos]
  e.target.value = '';
  render();
  console.log(todos);
})

// 사용자 리액션에 따라 바뀌는 todos의 배열
// 아이디 비교후 배열내용을 바꾸면 됨
$todos.addEventListener('change', e => {
  const id = +e.target.parentNode.id
  todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  render();
})

// // 탭별 액티브 클래스
// $nav.addEventListener('click', e => {
//   // console.log(e.target.id);
//   [...$nav.children].forEach(navItem => {
//     if(navItem.id === e.target.id) naveItem.classList.add('active');
//     // else {naveItem.classList.remove('active')};
//   })
//   // navState = e.target.id;
//   // render();
//   // [$nav.children].forEach(navItem => {
//     // console.log(navItem.id);
//   // })
// })

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

// x버튼 클릭시 삭제
$todos.addEventListener('click', e => {
  if(!e.target.classList.contains('remove-todo')) return;

  const id = +e.target.parentNode.id;
  todos = todos.filter(todo => todo.id !== id)
  render();
})

// 전체선택
$allComplete.addEventListener('click', e => {
  if(e.target.checked) todos = todos.map(todo => ({...todo, completed: true}));
  else todos = todos.map(todo => ({...todo, completed: false}));
  render();
});

// clear btn
$clearBtn.addEventListener('click', e => {
  todos = todos.filter(todo => !todo.completed);
  render();
})

render();