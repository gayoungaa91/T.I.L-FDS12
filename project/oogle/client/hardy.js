'use strict'

const searchField = document.querySelector('#search-field')
const autoCompleteResult = document.querySelector('.autocomplete-results')

const BASE_URL = 'http://localhost:3000/autocomplete'
const KEYWORDS = Object.freeze(['s', 'st', 'stu', 'stud', 'study'])
const SEARCH_AREA = 'search'

searchField.addEventListener('input', debounce(onSearchFieldInput, 300))
searchField.addEventListener('focus', () => showAutoCompleteResult())

document.body.addEventListener('click', event => {
  // 검색 영역(검색창, 자동완성) 클릭 시 아무 일도 처리 X
  if (event.target.dataset.area === SEARCH_AREA) return
  if (event.target.classList.contains('autocomplete-item')) {
    searchField.value = event.target.textContent
  }
  hiddenAutoCompleteResult()
})

function onSearchFieldInput(searchKeyWord) {
  // 검색어가 's', 'st', 'stu', 'stud', 'study' 중 하나 일 때만 서버에 요청
  if (KEYWORDS.includes(searchKeyWord)) {
    fetchData(searchKeyWord)
    showAutoCompleteResult()
  } else {
    resetAutoCompleteWords()
  }
}

function fetchData(searchKeyWord) {
  fetch(`${BASE_URL}?keyword=${searchKeyWord}`)
    .then(response => response.json())
    .then(displayAutoCompleteWords)
}

function displayAutoCompleteWords(autoCompleteWords) {
  autoCompleteResult.innerHTML = autoCompleteWords
    .map(createHtmlString)
    .join('')
}

function resetAutoCompleteWords() {
  autoCompleteResult.innerHTML = ''
}

function createHtmlString(autoCompleteWord) {
  return `<li class="autocomplete-item" tabindex="0">${autoCompleteWord}</li>`
}

function debounce(func, wait) {
  let timeoutId = null
  return function (event) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(event.target.value), wait)
  }
}

function showAutoCompleteResult() {
  autoCompleteResult.classList.remove('hidden')
}

function hiddenAutoCompleteResult() {
  autoCompleteResult.classList.add('hidden')
}