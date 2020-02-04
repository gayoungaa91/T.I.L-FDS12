let width = 2;
let height = 2;
let cardBackImg = [
  'url(\'pokemon/pokemon1.png\')',
  'url(\'pokemon/pokemon1.png\')',
  'url(\'pokemon/pokemon2.png\')',
  'url(\'pokemon/pokemon2.png\')'
];

let cardBackImgBackUp = cardBackImg.slice();
let randomCardBackImg = [];
let clickFlag = true;
let clicked = [];
let completedCard = [];
let startingTime = new Date();
let endingTime;
let totalTime;

document.querySelector('#fireworkDiv').style.visibility = 'hidden';

function shuffle() {
  for (let i = 0; cardBackImgBackUp.length > 0; i++) {
    randomCardBackImg = randomCardBackImg.concat(
      cardBackImgBackUp.splice(
        Math.floor(Math.random() * cardBackImgBackUp.length),
        1
      )
    );
  }
}

function cardSetting(width, height) {
  clickFlag = false;
  for (let i = 0; i < width * height; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.style.backgroundImage = randomCardBackImg[i];
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    game(card);
    document.querySelector('#wrapper').appendChild(card);
  }

  document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('flipped');
    }, 1000 + 100 * index);
  });
  setTimeout(() => {
    document.querySelectorAll('.card').forEach((card) => {
      card.classList.remove('flipped');
    });
    clickFlag = true;
  }, 5000);
}

function scoreboard(totalTime) {
  const time = document.createElement('div');
  time.classList.add('time');
  document.querySelector('.score').appendChild(time);
  document.querySelector(
    '.time'
  ).innerHTML += `<p class="timeScore">${totalTime} Second</p>`;
}

function game(card) {
  card.addEventListener('click', () => {
    if (clickFlag && !completedCard.includes(card)) {
      card.classList.toggle('flipped');
      clicked.push(card);
      if (clicked.length === 2) {
        if (
          clicked[0].querySelector('.card-back').style
            .backgroundImage
                    === clicked[1].querySelector('.card-back').style.backgroundImage
        ) {
          completedCard.push(clicked[0]);
          completedCard.push(clicked[1]);
          clicked = [];
          if (completedCard.length === width * height) {
            setTimeout(() => {
              document.querySelector('#wrapper').innerHTML = '';
              clicked = [];
              randomCardBackImg = [];
              completedCard = [];
              if (width * height === 4) {
                width = 2;
                height = 4;
                cardBackImg = [
                  'url(\'pokemon/pokemon1.png\')',
                  'url(\'pokemon/pokemon1.png\')',
                  'url(\'pokemon/pokemon2.png\')',
                  'url(\'pokemon/pokemon2.png\')',
                  'url(\'pokemon/pokemon3.png\')',
                  'url(\'pokemon/pokemon3.png\')',
                  'url(\'pokemon/pokemon4.png\')',
                  'url(\'pokemon/pokemon4.png\')'
                ];
                cardBackImgBackUp = cardBackImg.slice();
                shuffle();
                cardSetting(width, height);
              } else if (width * height === 8) {
                width = 3;
                height = 4;
                cardBackImg = [
                  'url(\'pokemon/pokemon1.png\')',
                  'url(\'pokemon/pokemon1.png\')',
                  'url(\'pokemon/pokemon2.png\')',
                  'url(\'pokemon/pokemon2.png\')',
                  'url(\'pokemon/pokemon3.png\')',
                  'url(\'pokemon/pokemon3.png\')',
                  'url(\'pokemon/pokemon4.png\')',
                  'url(\'pokemon/pokemon4.png\')',
                  'url(\'pokemon/pokemon5.png\')',
                  'url(\'pokemon/pokemon5.png\')',
                  'url(\'pokemon/pokemon6.png\')',
                  'url(\'pokemon/pokemon6.png\')'
                ];
                cardBackImgBackUp = cardBackImg.slice();
                shuffle();
                cardSetting(width, height);
              } else if (width * height === 12) {
                endingTime = new Date();
                totalTime = (endingTime - startingTime) / 1000;
                scoreboard(totalTime);
                document.querySelector(
                  '#fireworkDiv'
                ).style.visibility = 'visible';
                setTimeout(() => {
                  document.querySelector(
                    '#fireworkDiv'
                  ).style.visibility = 'hidden';
                  document.querySelector(
                    '#wrapper'
                  ).innerHTML = '';
                  startingTime = null;
                  startingTime = new Date();
                  width = 2;
                  height = 2;
                  cardBackImg = [
                    'url(\'pokemon/pokemon1.png\')',
                    'url(\'pokemon/pokemon1.png\')',
                    'url(\'pokemon/pokemon2.png\')',
                    'url(\'pokemon/pokemon2.png\')'
                  ];
                  cardBackImgBackUp = cardBackImg.slice();
                  shuffle();
                  cardSetting(width, height);
                }, 5000);
              }
            }, 800);
          }
        } else {
          clickFlag = false;
          setTimeout(() => {
            clicked[0].classList.remove('flipped');
            clicked[1].classList.remove('flipped');
            clickFlag = true;
            clicked = [];
          }, 1000);
        }
      }
    }
  });
}

shuffle();
cardSetting(width, height);