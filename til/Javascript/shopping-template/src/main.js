let datas = [
  {id: 1, sex: 'female', size: 'lagrge size', color: 'pink', classification:'tee', url: './img/pink_t.png'},
  {id: 2, sex: 'man', size: 'small size', color: 'blue', classification:'pants', url: './img/blue_p.png'},
  {id: 3, sex: 'man', size: 'lagrge size', color: 'yellow', classification:'pants', url: './img/yellow_p.png'},
  {id: 4, sex: 'man', size: 'lagrge size', color: 'yellow', classification:'skirts', url: './img/yellow_s.png'},
  {id: 5, sex: 'female', size: 'small size', color: 'blue', classification:'skirts', url: './img/blue_s.png'},
  {id: 6, sex: 'male', size: 'lagrge size', color: 'blue', classification:'tee', url: './img/blue_t.png'},
  {id: 7, sex: 'male', size: 'lagrge size', color: 'yellow', classification:'tee', url: './img/yellow_t.png'},
  {id: 8, sex: 'female', size: 'small size', color: 'pink', classification:'pants', url: './img/pink_p.png'},
  {id: 9, sex: 'female', size: 'lagrge size', color: 'pink', classification:'tee', url: './img/pink_t.png'},
  {id: 10, sex: 'man', size: 'small size', color: 'blue', classification:'pants', url: './img/blue_p.png'}
]

const $clothing = document.querySelector('.clothing');
const $filter = document.querySelector('.filter');
const $filterTee = document.querySelector('.filter-tee');
const $filterPants = document.querySelector('.filter-pants');
const $filterSkirt = document.querySelector('.filter-skirt');
const $filterBlue = document.querySelector('.filter-blue');
const $filterYellow = document.querySelector('.filter-yellow');
const $filterPink = document.querySelector('.filter-pink');
let filterClass = '';

// $filterBlue.addEventListener('click', e => {
//   filterClass = e.target.parentNode.className;
//   if (filterClass === 'filter-blue') console.log('1');
// })


function render() {
  let _datas = [...datas];
  // console.log(_datas);
  if(filterClass === 'filter-tee') {
    _datas = datas.filter(data => data.classification === 'tee')
  } 
  
  if(filterClass === 'filter-pants') {
    _datas = datas.filter(data => data.classification === 'pants')
  } 
  
  if(filterClass === 'filter-skirt') {
    _datas = datas.filter(data => data.classification === 'skirts')
  } 

  if (filterClass === 'filter-blue') {
    _datas = datas.filter(data => data.color === 'blue')
  } 
  
  if (filterClass === 'filter-yellow') {
    _datas = datas.filter(data => data.color === 'yellow')
  }

  if (filterClass === 'filter-pink') {
    _datas = datas.filter(data => data.color === 'pink')
  }


  let html = '';
  _datas.forEach(({id, size, url, sex}) => {
    html += `<li class="clothing-list" id="${id}">
      <p class="clothing-img-01"><img src=${url}></p>
      <p class="clothing-info-01">${sex}, ${size}</p>
    </li>`
})
  $clothing.innerHTML = html;
}

// $filterTee.addEventListener('click', e => {
//   if (!e.target.parentNode.classList.contains('filter-tee')) return;
//   datas = datas.filter(data => data.classification === 'tee' )
//   render();
// })

// s

// $filterSkirt.addEventListener('click', e => {
//   if(!e.target.parentNode.classList.contains('filter-skirt')) return;
//   datas = datas.filter(data => data.classification === 'skirts')
//   render();
  
// })

$filter.addEventListener('click', e => {
  // console.log(e.target);
  filterClass = e.target.className;
  console.log(filterClass)
  render();
})




render();

