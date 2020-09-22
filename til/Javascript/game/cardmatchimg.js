let horizontal = 4;
let vertical = 3;

function cardSetting(horizontal, vertical) {
  for(let i = 0; i<horizontal*vertical; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    let cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    let cardBack = document.createElement('div');
    cardBack.className = 'card-back';
  
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    document.body.appendChild(card);
  }

}
// cardSetting(horizontal, vertical);
cardSetting(horizontal, vertical);