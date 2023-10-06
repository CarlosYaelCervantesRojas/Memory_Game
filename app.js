const cards = [
    {
        "name": "burguer",
        "path": "images/cheeseburger.png"
    },
    {
        "name": "fries",
        "path": "images/fries.png"
    },
    {
        "name": "hotdog",
        "path": "images/hotdog.png"
    },
    {
        "name": "ice-cream",
        "path": "images/ice-cream.png"
    },
    {
        "name": "milkshake",
        "path": "images/milkshake.png"
    },
    {
        "name": "pizza",
        "path": "images/pizza.png"
    },
    {
        "name": "burguer",
        "path": "images/cheeseburger.png"
    },
    {
        "name": "fries",
        "path": "images/fries.png"
    },
    {
        "name": "hotdog",
        "path": "images/hotdog.png"
    },
    {
        "name": "ice-cream",
        "path": "images/ice-cream.png"
    },
    {
        "name": "milkshake",
        "path": "images/milkshake.png"
    },
    {
        "name": "pizza",
        "path": "images/pizza.png"
    }
];
let clickedCards = [];
let correctCards = [];
let attempts = 0;
const cardsRandom = cards.sort(()=> 0.5 - Math.random());

const score = document.getElementById('score');
const again = document.getElementById('again');
const attempt = document.getElementById('attempt');
const grid = document.getElementById('grid');
const blankImagePath = 'images/blank.png'; 

cardsRandom.forEach((obj, i) => {
    const hiddenCard = document.createElement('img');

    hiddenCard.setAttribute('id', i);
    hiddenCard.setAttribute('src', blankImagePath);
    hiddenCard.setAttribute('class', 'hidden');
    hiddenCard.addEventListener('click', showCard);

    grid.append(hiddenCard);
});

function showCard(){
    const card = this;
    const id = card.getAttribute('id');
    const pathImage = cardsRandom[id].path;

    card.setAttribute('src', pathImage)
    card.setAttribute('class', 'show');
    clickedCards.push(card)

    if (clickedCards.length === 2){
        compareCards();
    } 
}

function compareCards(){
    const cardOne = clickedCards[0];
    const cardTwo = clickedCards[1];
    if (cardOne === cardTwo){
        clickedCards.pop();
    } else if (cardOne !== cardTwo && cardOne.attributes.src.value === cardTwo.attributes.src.value){
        cardOne.removeEventListener('click', showCard);
        cardTwo.removeEventListener('click', showCard);
        correctCards.push(cardOne, cardTwo);
        clickedCards = [];
        attempts++;
        if (correctCards.length === cards.length) {
            gameOver();
        }
    } else {
        setTimeout(() => {
            cardOne.setAttribute('src', blankImagePath);
            cardTwo.setAttribute('src', blankImagePath);
            cardOne.setAttribute('class', 'hidden');
            cardTwo.setAttribute('class', 'hidden');
        }, 500);
        clickedCards = [];
        attempts++;
    }
    attempt.innerText = attempts;
}

function gameOver(){
    score.innerText = 'You win!!';
    again.removeAttribute('hidden')
}

again.addEventListener('click', function(){
    location.reload();
});

attempt.innerText = attempts;