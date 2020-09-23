let horizontal = 4;
let vertical = 3;

function cardSetting(horizontal, vertical) {
  for(let i = 0; i<horizontal*vertical; i++) {
    let card = document.createElement('div');
    card.className = 'card'
    let cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    let cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    let cardBack = document.createElement('div');
    cardBack.className = 'card-back';
  
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    })
    document.body.appendChild(card);
  }
}

cardSetting(horizontal, vertical);