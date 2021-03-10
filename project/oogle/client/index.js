const AUTOCOMPLETE = document.querySelector('.autocomplete-results');
const SEARCH = document.querySelector('#search-field');

// 자동완성 리스트 render
function autocompleteList(myJson) {
  list = '';
  myJson.forEach(data => {
    list += `<li tabindex="0">${data}</li>`
  })
  AUTOCOMPLETE.innerHTML = list;
}

// 서버 request
function fetchdata(inputValue) {
  fetch(`http://localhost:3000/autocomplete?keyword=${inputValue}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    autocompleteList(myJson)
  });
}

// 네트위크, study 단어이외에 server에 요청 가지 않도록 처리
SEARCH.addEventListener('input', e => {
  const value = e.target.value;
  const keyWord = ['s', 'st', 'stu', 'stud', 'study'];

  if (keyWord.includes(value)) {
    // keyword와 일치할 때 
    fetchdata(value)
  } else {
    // keyword와 일치하지 않을 때
    AUTOCOMPLETE.innerHTML = '';
  }
})

// 클릭, 자동 검색어를 클릭하면 input-value에 클릭한 값으로 들어옴
AUTOCOMPLETE.addEventListener('click', e => {
  if(e.target.tagName !== 'LI') return
  SEARCH.value = e.target.innerText;
  AUTOCOMPLETE.innerHTML = ''
})

// tab, 자동 검색어를 엔터치면 input-value에 클릭한 값으로 들어옴
AUTOCOMPLETE.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
    SEARCH.value = e.target.innerText;
    AUTOCOMPLETE.innerHTML = ''
  }
})

SEARCH.focus();


