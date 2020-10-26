let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $input = document.querySelector('.input-todo');
let $ul = document.querySelector('.todos');
// let checkBox = document.createElement('')
let list = document.createElement('li');
// console.log($ul)
$input.addEventListener('keydown', (e) => {
  // if(e.key === 'Enter') {
  //   // $ul.innerHTML = `<li id="myId" class='todo-item'>{{$input.value}}</li>`
  //   $ul.innerHTML = `<li id="myId" class="todo-item">
  //   ${$input.value}
  //   <input class="custom-checkbox" type="checkbox" id="ck-myId">
  //     <label for="ck-myId"></label>
  //     <i class="remove-todo far fa-times-circle"></i>
  //     </li>`
  // }
})

// const $nav = document.getElementsByTagName('li');
