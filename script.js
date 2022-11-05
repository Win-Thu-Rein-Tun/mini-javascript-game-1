'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector(`.message`).textContent = `Correct Number`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;

*/

let secretNumber = Math.trunc (Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = (message) => {
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener
(`click`, function () {
    const guess = Number (document.querySelector(`.guess`).value);

    console.log(guess, typeof guess);

    if (guess < 1 || guess >19) {
        // document.querySelector(`.message`).textContent = `Between 0 & 20`;
        displayMessage(`Between 0 & 20`);
    }
    
    else if (guess === secretNumber) {
        // document.querySelector(`.message`).textContent = `Correct Number :)`;
        displayMessage(`Correct Number :)`);

        document.querySelector(`body`).style.backgroundColor = `#60b374`;

        document.querySelector(`.number`).style.width = `30rem`;

        document.querySelector(`.number`).textContent = secretNumber;

        document.querySelector(`h1`).textContent = `CONGRATULATION YOU WIN`;

        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
    } 

    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(`.message`).textContent = guess >secretNumber ? `Too High!` : `Too Low`;
            score--;
            displayMessage(guess >secretNumber ? `Too High!` : `Too Low`);

            document.querySelector(`.score`).textContent = score;
        } else {
            // document.querySelector(`.message`).textContent = `You lost the game!`;

            displayMessage(`You lost the game!`);

            document.querySelector(`.score`).textContent = 0;
        }
    }
    
    
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(`.message`).textContent = `Too High!`;
    //         score--;
    //         document.querySelector(`.score`).textContent = score;
    //     } else {
    //         document.querySelector(`.message`).textContent = `You lost the game!`;
    //         document.querySelector(`.score`).textContent = 0;
    //     }

    // } 
    
    
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(`.message`).textContent = `Too Low!`;
    //         score--;
    //         document.querySelector(`.score`).textContent = score;
    //     } else {
    //         document.querySelector(`.message`).textContent = `You lost the game!`;
    //         document.querySelector(`.score`).textContent = 0;
    //     }
    // }

});

document.querySelector(`.again`).addEventListener
(`click`, function() {

    score = 20;

    secretNumber = Math.trunc (Math.random() * 20) + 1;

    // document.querySelector(`.message`).textContent = `Start guessing...`;

    displayMessage(`Start guessing...`);

    document.querySelector(`.score`).textContent = score;

    document.querySelector(`body`).style.backgroundColor = `#222`;

    document.querySelector(`.number`).style.width = `15rem`;

    document.querySelector(`.number`).textContent = `?`;

    document.querySelector(`.guess`).value = ``;

    document.querySelector(`h1`).textContent = `Guess My Number!`;
});
