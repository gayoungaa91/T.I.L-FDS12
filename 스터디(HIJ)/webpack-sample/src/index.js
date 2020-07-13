const data = require('./data');
import './app.css'

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'haha';
  return element;
}

document.body.appendChild(component());