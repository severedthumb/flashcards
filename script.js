const cardContainer = document.querySelector('.cardContainer');
const cardFront = document.querySelector('.cardFront');
const cardBack = document.querySelector('.cardBack');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const nextButton = document.querySelector('.nextButton');
const progressBar = document.querySelector('.progressBar');



// let startLength = cards.length;     // RESTORE THIS IF THE EXPERIMENTAL STUFF BREAKS THINGS


// EXPERIMENTAL FUNCTION    - THIS LIMITS THE SIZE OF THE DECK TO WHATEVER YOU PUT FOR THE START LENGTH VARIABLE

let startLength = 100;

while (cards.length > startLength) {
    let randomNumber = Math.floor(Math.random() * cards.length);  // GET RANDOM NUMBER
    cards.splice(randomNumber, 1);                                // REMOVE CARD FROM DECK
};

// END OF EXPERIMENTAL STUFF





// FLIP CARD ON CLICK

function flipCard() {
    if (cardBack.style.display === 'flex') {
        cardFront.style.display = 'flex';
        cardBack.style.display = 'none';
    } else {
        cardFront.style.display = 'none';
        cardBack.style.display = 'flex';
    }
}

cardContainer.addEventListener('click', flipCard);



// NEXT BUTTON FUNCTIONALITY

function updateProgressBar() {
    progressBar.innerText = `${startLength - cards.length}/${startLength}`;
}

function nextCard() {
    let number = Math.floor(Math.random() * cards.length);  // GET RANDOM NUMBER
    question.innerText = cards[number][0];                  // SET FRONT OF CARD (QUESTION)
    answer.innerText = cards[number][1];                    // SET BACK OF CARD (ANSWER)
    cards.splice(number, 1);                                // REMOVE CARD FROM DECK
}

nextButton.addEventListener('click', () => {
    updateProgressBar();
    if (cards.length === 0) {
        cardFront.style.display = 'flex';                   // ENSURE NEXT CARD STARTS WITH FRONT (QUESTION) VISIBLE
        cardBack.style.display = 'none';
        cardContainer.removeEventListener('click', flipCard);
        question.innerText = 'That\s all, folks!';
    } else {
        cardFront.style.display = 'flex';                   // ENSURE NEXT CARD STARTS WITH FRONT (QUESTION) VISIBLE
        cardBack.style.display = 'none';
        nextCard();
    }
});


// INITIALIZE
updateProgressBar();
nextCard();

