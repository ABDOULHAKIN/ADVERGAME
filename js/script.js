// const gameContainers = document.querySelectorAll('.game-container');
// const ballImages = ['images/ballon.png', 'images/ballon.png', 'images/ballon.png'];
// const startButton = document.getElementById('start-button');
// const timerElement = document.getElementById('timer');
// const messageElement = document.getElementById('message');
// const replayButton = document.getElementById('replay-button');
// const registrationForm = document.getElementById('registration-form');
// const audioTimeout = new Audio('sounds/timeout.mp3');
// const audioTimefeliciter = new Audio('sounds/applaud.mp3');

// const countries = [
//     { code: "choix", name: "Choisissez un pays" },
//     { code: "FR", name: "France" },
//     { code: "US", name: "United States" },
//     { code: "UK", name: "United Kingdom" },
//     // Ajoutez d'autres pays ici
// ];

// const selectCountry = document.getElementById('pays');

// countries.forEach((country) => {
//     const option = document.createElement('option');
//     option.value = country.code;
//     option.textContent = country.name;
//     selectCountry.appendChild(option);
// });

// let selectedCountry = "";

// selectCountry.addEventListener('change', (event) => {
//     selectedCountry = event.target.value;
//     startButton.disabled = false;
// });

// let startTime;
// let gameStarted = false;
// let clicks = 0;
// let playedOnce = false;
// let intervalID;

// function displayBall(container, ballImage) {
//     const ballon = document.createElement('div');
//     ballon.classList.add('ballon');
//     ballon.style.backgroundImage = `url(${ballImage})`;
//     container.appendChild(ballon);

//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;
//     const ballWidth = 100;
//     const ballHeight = 100;
//     const maxX = containerWidth - ballWidth;
//     const maxY = containerHeight - ballHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     ballon.style.left = randomX + 'px';
//     ballon.style.top = randomY + 'px';

//     ballon.addEventListener('click', () => {
//         container.removeChild(ballon);
//         if (gameStarted) {
//             clicks++;
//             if (clicks === gameContainers.length) {
//                 const endTime = new Date().getTime();
//                 const timeTaken = (endTime - startTime) / 1000;
//                 handleGameResult(timeTaken);
//             }
//         }
//     });
// }

// function startGame() {
//     if (!gameStarted && !playedOnce) {
//         if (selectedCountry === "") {
//             displayMessage("Veuillez choisir un pays avant de démarrer le jeu.", "red");
//         } else {
//             gameStarted = true;
//             clicks = 0;
//             timerElement.textContent = '0.00';
//             messageElement.textContent = '';
//             audioTimeout.pause();

//             gameContainers.forEach((container, index) => {
//                 displayBall(container, ballImages[index]);
//             });

//             startTime = new Date().getTime();

//             setTimeout(() => {
//                 if (clicks < gameContainers.length) {
//                     handleGameResult(5);
//                 }
//             }, 5000);

//             intervalID = setInterval(() => {
//                 if (gameStarted) {
//                     const currentTime = new Date().getTime();
//                     const timeElapsed = (currentTime - startTime) / 1000;
//                     timerElement.textContent = timeElapsed.toFixed(2);
//                 }
//             }, 10);
//         }
//     }
// }

// function handleGameResult(timeTaken) {
//     let message = "";

//     if (clicks === gameContainers.length) {
//         if (timeTaken <= 2) {
//             message = `Félicitations ! Vous avez attrapé les trois ballons en ${timeTaken.toFixed(2)} secondes ! Vous avez gagné pour ${selectedCountry} ! 🏆`;
//             audioTimefeliciter.play();
//         } else if (timeTaken <= 3) {
//             message = `Vous avez réussi à attraper les trois ballons pour ${selectedCountry}, mais ce n'était pas assez rapide. Réessayez ! 🕒`;
//         } else {
//             message = `Dommage, vous n'avez pas gagné cette fois pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         }
//     } else {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     }

//     displayMessage(message, "red");
//     endGame();
// }

// function displayMessage(text, color) {
//     messageElement.textContent = text;
//     messageElement.style.color = color;
// }

// function endGame() {
//     gameStarted = false;
//     gameContainers.forEach((container) => {
//         container.innerHTML = '';
//     });

//     clearInterval(intervalID);

//     const replayContainer = document.getElementById('replay-container');
//     replayContainer.style.display = 'block';
//     replayButton.style.display = 'block';

//     if (clicks === gameContainers.length && playedOnce) {
//         setTimeout(() => {
//             registrationForm.style.display = 'block';
//         }, 2000);
//     }
// }

// startButton.addEventListener('click', startGame);

// replayButton.addEventListener('click', () => {
//     playedOnce = true;
//     startGame();
// });

// setInterval(() => {
//     if (gameStarted) {
//         const currentTime = new Date().getTime();
//         const timeElapsed = (currentTime - startTime) / 1000;
//         timerElement.textContent = timeElapsed.toFixed(2);
//     }
// }, 10);



// const gameContainers = document.querySelectorAll('.game-container');
// const ballImages = ['images/ballon.png', 'images/ballon.png', 'images/ballon.png'];
// const startButton = document.getElementById('start-button');
// const timerElement = document.getElementById('timer');
// const messageElement = document.getElementById('message');
// const replayButton = document.getElementById('replay-button');
// const registrationForm = document.getElementById('registration-form');
// const audioTimeout = new Audio('sounds/timeout.mp3');
// const audioTimefeliciter = new Audio('sounds/applaud.mp3');

// const countries = [
//     { code: "choix", name: "Choisissez un pays" },
//     { code: "FR", name: "France" },
//     { code: "US", name: "United States" },
//     { code: "UK", name: "United Kingdom" },
//     // Ajoutez d'autres pays ici
// ];

// const selectCountry = document.getElementById('pays');

// countries.forEach((country) => {
//     const option = document.createElement('option');
//     option.value = country.code;
//     option.textContent = country.name;
//     selectCountry.appendChild(option);
// });

// let selectedCountry = "";

// selectCountry.addEventListener('change', (event) => {
//     selectedCountry = event.target.value;
//     startButton.disabled = false;
// });

// let startTime;
// let gameStarted = false;
// let clicks = 0;
// let playedOnce = false;
// let intervalID;

// function displayBall(container, ballImage) {
//     const ballon = document.createElement('div');
//     ballon.classList.add('ballon');
//     ballon.style.backgroundImage = `url(${ballImage})`;
//     container.appendChild(ballon);

//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;
//     const ballWidth = 100;
//     const ballHeight = 100;
//     const maxX = containerWidth - ballWidth;
//     const maxY = containerHeight - ballHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     ballon.style.left = randomX + 'px';
//     ballon.style.top = randomY + 'px';

//     ballon.addEventListener('click', () => {
//         container.removeChild(ballon);
//         if (gameStarted) {
//             clicks++;
//             if (clicks === gameContainers.length) {
//                 const endTime = new Date().getTime();
//                 const timeTaken = (endTime - startTime) / 1000;
//                 handleGameResult(timeTaken);
//             }
//         }
//     });
// }

// function startGame() {
//     if (!gameStarted && !playedOnce) {
//         if (selectedCountry === "") {
//             displayMessage("Veuillez choisir un pays avant de démarrer le jeu.", "red");
//         } else {
//             gameStarted = true;
//             clicks = 0;
//             timerElement.textContent = '0.00';
//             messageElement.textContent = '';
//             audioTimeout.pause();

//             gameContainers.forEach((container, index) => {
//                 displayBall(container, ballImages[index]);
//             });

//             startTime = new Date().getTime();

//             setTimeout(() => {
//                 if (clicks < gameContainers.length) {
//                     handleGameResult(5);
//                 }
//             }, 5000);

//             intervalID = setInterval(() => {
//                 if (gameStarted) {
//                     const currentTime = new Date().getTime();
//                     const timeElapsed = (currentTime - startTime) / 1000;
//                     timerElement.textContent = timeElapsed.toFixed(2);
//                 }
//             }, 10);
//         }
//     }
// }

// function handleGameResult(timeTaken) {
//     let message = "";

//     if (clicks === gameContainers.length) {
//         if (timeTaken <= 2) {
//             message = `Félicitations ! Vous avez attrapé les trois ballons en ${timeTaken.toFixed(2)} secondes ! Vous avez gagné pour ${selectedCountry} ! 🏆`;
//             audioTimefeliciter.play();
//         } else if (timeTaken <= 3) {
//             message = `Vous avez réussi à attraper les trois ballons pour ${selectedCountry}, mais ce n'était pas assez rapide. Réessayez ! 🕒`;
//         } else {
//             message = `Dommage, vous n'avez pas gagné cette fois pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         }
//     } else {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     }

//     displayMessage(message, "red");
//     endGame();
// }

// function displayMessage(text, color) {
//     messageElement.textContent = text;
//     messageElement.style.color = color;
// }

// function endGame() {
//     gameStarted = false;
//     gameContainers.forEach((container) => {
//         container.innerHTML = '';
//     });

//     clearInterval(intervalID);

//     const replayContainer = document.getElementById('replay-container');
//     replayContainer.style.display = 'block';
//     replayButton.style.display = 'block';

//     if (clicks === gameContainers.length && playedOnce) {
//         setTimeout(() => {
//             registrationForm.style.display = 'block';
//         }, 2000);
//     }
// }

// startButton.addEventListener('click', startGame);

// replayButton.addEventListener('click', () => {
//     playedOnce = true;
//     startGame();
// });

// setInterval(() => {
//     if (gameStarted) {
//         const currentTime = new Date().getTime();
//         const timeElapsed = (currentTime - startTime) / 1000;
//         timerElement.textContent = timeElapsed.toFixed(2);
//     }
// }, 10);

// // Fonction pour afficher le modal d'inscription
// function displayRegistrationModal() {
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     // Écouteur d'événement pour fermer le modal
//     const closeBtn = document.getElementById('close-modal');
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });
// }

// // Ajoutez l'appel à la fonction displayRegistrationModal() où vous le souhaitez dans votre code, par exemple, lorsque le joueur gagne ou atteint le temps limite.

// // Exemple d'appel de la fonction lorsque le joueur gagne :
// if (clicks === gameContainers.length) {
//     const endTime = new Date().getTime();
//     const timeTaken = (endTime - startTime) / 1000;
//     handleGameResult(timeTaken);
    
//     // Ajout de l'appel à la fonction displayRegistrationModal()
//     displayRegistrationModal();
// }

// // Exemple d'appel de la fonction lorsque le joueur atteint le temps limite :
// setTimeout(() => {
//     if (clicks < gameContainers.length) {
//         handleGameResult(5);
        
//         // Ajout de l'appel à la fonction displayRegistrationModal()
//         displayRegistrationModal();
//     }
// }, 5000);




// const gameContainers = document.querySelectorAll('.game-container');
// const ballImages = ['images/ballon.png', 'images/ballon.png', 'images/ballon.png'];
// const startButton = document.getElementById('start-button');
// const timerElement = document.getElementById('timer');
// const messageElement = document.getElementById('message');
// const replayButton = document.getElementById('replay-button');
// const registrationForm = document.getElementById('registration-form');
// const audioTimeout = new Audio('sounds/timeout.mp3');
// const audioTimefeliciter = new Audio('sounds/applaud.mp3');

// const countries = [
//     { code: "choix", name: "Choisissez un pays" },
//     { code: "FR", name: "France" },
//     { code: "US", name: "United States" },
//     { code: "UK", name: "United Kingdom" },
//     // Ajoutez d'autres pays ici
// ];

// const selectCountry = document.getElementById('pays');

// countries.forEach((country) => {
//     const option = document.createElement('option');
//     option.value = country.code;
//     option.textContent = country.name;
//     selectCountry.appendChild(option);
// });

// let selectedCountry = "";

// selectCountry.addEventListener('change', (event) => {
//     selectedCountry = event.target.value;
//     startButton.disabled = false;
// });

// let startTime;
// let gameStarted = false;
// let clicks = 0;
// let playedOnce = false;
// let intervalID;

// function displayBall(container, ballImage) {
//     const ballon = document.createElement('div');
//     ballon.classList.add('ballon');
//     ballon.style.backgroundImage = `url(${ballImage})`;
//     container.appendChild(ballon);

//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;
//     const ballWidth = 100;
//     const ballHeight = 100;
//     const maxX = containerWidth - ballWidth;
//     const maxY = containerHeight - ballHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     ballon.style.left = randomX + 'px';
//     ballon.style.top = randomY + 'px';

//     ballon.addEventListener('click', () => {
//         container.removeChild(ballon);
//         if (gameStarted) {
//             clicks++;
//             if (clicks === gameContainers.length) {
//                 const endTime = new Date().getTime();
//                 const timeTaken = (endTime - startTime) / 1000;
//                 handleGameResult(timeTaken);
//             }
//         }
//     });
// }

// function startGame() {
//     if (!gameStarted && !playedOnce) {
//         if (selectedCountry === "") {
//             displayMessage("Veuillez choisir un pays avant de démarrer le jeu.", "red");
//         } else {
//             gameStarted = true;
//             clicks = 0;
//             timerElement.textContent = '0.00';
//             messageElement.textContent = '';
//             audioTimeout.pause();

//             gameContainers.forEach((container, index) => {
//                 displayBall(container, ballImages[index]);
//             });

//             startTime = new Date().getTime();

//             setTimeout(() => {
//                 if (clicks < gameContainers.length) {
//                     handleGameResult(5);
//                 }
//             }, 5000);

//             intervalID = setInterval(() => {
//                 if (gameStarted) {
//                     const currentTime = new Date().getTime();
//                     const timeElapsed = (currentTime - startTime) / 1000;
//                     timerElement.textContent = timeElapsed.toFixed(2);
//                     if (timeElapsed > 5) {
//                         handleGameResult(timeElapsed);
//                     }
//                 }
//             }, 10);
//         }
//     }
// }

// function handleGameResult(timeTaken) {
//     let message = "";
//     let modalMessage = document.getElementById('modal-message');
//     let modalContent = document.getElementById('modal-content');
//     let modal = document.getElementById('myModal');

//     clearInterval(intervalID); // Arrêter le chrono

//     if (timeTaken > 5) {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     } else if (clicks === gameContainers.length) {
//         if (timeTaken <= 2) {
//             message = `Félicitations ! Vous avez attrapé les trois ballons en ${timeTaken.toFixed(2)} secondes ! Vous avez gagné pour ${selectedCountry} ! 🏆`;
//             audioTimefeliciter.play();
//         } else if (timeTaken <= 3) {
//             message = `Vous avez réussi à attraper les trois ballons pour ${selectedCountry}, mais ce n'était pas assez rapide. Réessayez ! 🕒`;
//         } else {
//             message = `Dommage, vous n'avez pas gagné cette fois pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         }
//     } else {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     }

//     modalMessage.textContent = message;
//     modalContent.style.display = 'block';
//     modal.style.display = 'block';
// }

// startButton.addEventListener('click', startGame);

// // Réglez l'affichage du modal lorsque le bouton replay est cliqué
// replayButton.addEventListener('click', () => {
//     playedOnce = true;
//     startGame();
//     displayModal();
// });

// // Fonction pour afficher le modal d'inscription
// function displayModal() {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'block';
// }

// // Écouteur d'événement pour fermer le modal
// document.getElementById('close-modal').addEventListener('click', () => {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// });



// const gameContainers = document.querySelectorAll('.game-container');
// const ballImages = ['images/ballon.png', 'images/ballon.png', 'images/ballon.png'];
// const startButton = document.getElementById('start-button');
// const timerElement = document.getElementById('timer');
// const messageElement = document.getElementById('message');
// const replayButton = document.getElementById('replay-button');
// const audioTimeout = new Audio('sounds/timeout.mp3');
// const audioTimefeliciter = new Audio('sounds/applaud.mp3');

// const countries = [
//     { code: "choix", name: "Choisissez un pays" },
//     { code: "FR", name: "France" },
//     { code: "US", name: "United States" },
//     { code: "UK", name: "United Kingdom" },
//     // Ajoutez d'autres pays ici
// ];

// const selectCountry = document.getElementById('pays');

// countries.forEach((country) => {
//     const option = document.createElement('option');
//     option.value = country.code;
//     option.textContent = country.name;
//     selectCountry.appendChild(option);
// });

// let selectedCountry = "";

// selectCountry.addEventListener('change', (event) => {
//     selectedCountry = event.target.value;
//     startButton.disabled = false;
// });

// let startTime;
// let gameStarted = false;
// let clicks = 0;
// let playedOnce = false;
// let intervalID;

// function displayBall(container, ballImage) {
//     const ballon = document.createElement('div');
//     ballon.classList.add('ballon');
//     ballon.style.backgroundImage = `url(${ballImage})`;
//     container.appendChild(ballon);

//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;
//     const ballWidth = 100;
//     const ballHeight = 100;
//     const maxX = containerWidth - ballWidth;
//     const maxY = containerHeight - ballHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     ballon.style.left = randomX + 'px';
//     ballon.style.top = randomY + 'px';

//     ballon.addEventListener('click', () => {
//         container.removeChild(ballon);
//         if (gameStarted) {
//             clicks++;
//             if (clicks === gameContainers.length) {
//                 const endTime = new Date().getTime();
//                 const timeTaken = (endTime - startTime) / 1000;
//                 handleGameResult(timeTaken);
//             }
//         }
//     });
// }

// function startGame() {
//     if (!gameStarted && !playedOnce) {
//         if (selectedCountry === "") {
//             displayMessage("Veuillez choisir un pays avant de démarrer le jeu.", "red");
//         } else {
//             gameStarted = true;
//             clicks = 0;
//             timerElement.textContent = '0.00';
//             messageElement.textContent = '';
//             audioTimeout.pause();

//             gameContainers.forEach((container, index) => {
//                 displayBall(container, ballImages[index]);
//             });

//             startTime = new Date().getTime();

//             setTimeout(() => {
//                 if (clicks < gameContainers.length) {
//                     handleGameResult(5);
//                 }
//             }, 5000);

//             intervalID = setInterval(() => {
//                 if (gameStarted) {
//                     const currentTime = new Date().getTime();
//                     const timeElapsed = (currentTime - startTime) / 1000;
//                     timerElement.textContent = timeElapsed.toFixed(2);
//                     if (timeElapsed > 5) {
//                         handleGameResult(timeElapsed);
//                     }
//                 }
//             }, 10);
//         }
//     }
// }

// function handleGameResult(timeTaken) {
//     let message = "";
//     let modalMessage = document.getElementById('modal-message');
//     let modalContent = document.getElementById('modal-content');
//     let modal = document.getElementById('myModal');
//     let registrationForm = document.querySelector('.registration-visible');

//     clearInterval(intervalID); // Arrêter le chrono

//     if (timeTaken > 5) {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     } else if (clicks === gameContainers.length) {
//         if (timeTaken <= 2) {
//             message = `Félicitations ! Vous avez attrapé les trois ballons en ${timeTaken.toFixed(2)} secondes ! Vous avez gagné pour ${selectedCountry} ! 🏆`;
//             audioTimefeliciter.play();
//         } else if (timeTaken <= 3) {
//             message = `Vous avez réussi à attraper les trois ballons pour ${selectedCountry}, mais ce n'était pas assez rapide. Réessayez ! 🕒`;
//         } else {
//             message = `Dommage, vous n'avez pas gagné cette fois pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         }
//         // Activer le formulaire d'inscription
//         registrationForm.style.display = 'block';
//     } else {
//         message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
//         audioTimeout.play();
//     }

//     modalMessage.textContent = message;
//     modalContent.style.display = 'block';
//     modal.style.display = 'block';
// }



// startButton.addEventListener('click', startGame);

// // Réglez l'affichage du modal lorsque le bouton replay est cliqué
// replayButton.addEventListener('click', () => {
//     playedOnce = true;
//     startGame();
//     displayModal();
// });

// // Fonction pour afficher le modal d'inscription
// function displayModal() {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'block';
// }

// // Écouteur d'événement pour fermer le modal
// document.getElementById('close-modal').addEventListener('click', () => {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// });


const gameContainers = document.querySelectorAll('.game-container');
const ballImages = ['images/ballon.png', 'images/ballon.png', 'images/ballon.png'];
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const replayButton = document.getElementById('replay-button');
const registrationForm = document.getElementById('registration-form');
const audioTimeout = new Audio('sounds/timeout.mp3');
const audioTimefeliciter = new Audio('sounds/applaud.mp3');

const countries = [
    { code: "choix", name: "Choisissez un pays" },
    { code: "FR", name: "France" },
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "NZ", name: "New-Zélande" },
];

const selectCountry = document.getElementById('pays');

countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    selectCountry.appendChild(option);
});

let selectedCountry = "";

selectCountry.addEventListener('change', (event) => {
    selectedCountry = event.target.value;
    startButton.disabled = false;
});

let startTime;
let gameStarted = false;
let clicks = 0;
let playedOnce = false;
let intervalID;

function displayBall(container, ballImage) {
    const ballon = document.createElement('div');
    ballon.classList.add('ballon');
    ballon.style.backgroundImage = `url(${ballImage})`;
    container.appendChild(ballon);

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const ballWidth = 100;
    const ballHeight = 100;
    const maxX = containerWidth - ballWidth;
    const maxY = containerHeight - ballHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    ballon.style.left = randomX + 'px';
    ballon.style.top = randomY + 'px';

    ballon.addEventListener('click', () => {
        container.removeChild(ballon);
        if (gameStarted) {
            clicks++;
            if (clicks === gameContainers.length) {
                const endTime = new Date().getTime();
                const timeTaken = (endTime - startTime) / 1000;
                handleGameResult(timeTaken);
            }
        }
    });
}

function startGame() {
    if (!gameStarted && !playedOnce) {
        if (selectedCountry === "") {
            displayMessage("Veuillez choisir un pays avant de démarrer le jeu.", "red");
        } else {
            gameStarted = true;
            clicks = 0;
            timerElement.textContent = '0.00';
            messageElement.textContent = '';
            audioTimeout.pause();

            gameContainers.forEach((container, index) => {
                displayBall(container, ballImages[index]);
            });

            startTime = new Date().getTime();

            setTimeout(() => {
                if (clicks < gameContainers.length) {
                    handleGameResult(5);
                }
            }, 5000);

            intervalID = setInterval(() => {
                if (gameStarted) {
                    const currentTime = new Date().getTime();
                    const timeElapsed = (currentTime - startTime) / 1000;
                    timerElement.textContent = timeElapsed.toFixed(2);
                    if (timeElapsed > 5) {
                        handleGameResult(timeElapsed);
                    }
                }
            }, 10);
        }
    }
}

function handleGameResult(timeTaken) {
    let message = "";
    let modalMessage = document.getElementById('modal-message');
    let modalContent = document.getElementById('modal-content');
    let modal = document.getElementById('myModal');

    clearInterval(intervalID); // Arrêter le chrono

    if (timeTaken > 5) {
        message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
        audioTimeout.play();
    } else if (clicks === gameContainers.length) {
        if (timeTaken <= 2) {
            message = `Félicitations ! Vous avez attrapé les trois ballons en ${timeTaken.toFixed(2)} secondes ! Vous avez gagné pour ${selectedCountry} ! 🏆`;
            audioTimefeliciter.play();
        } else if (timeTaken <= 3) {
            message = `Vous avez réussi à attraper les trois ballons pour ${selectedCountry}, mais ce n'était pas assez rapide. Réessayez ! 🕒`;
        } else {
            message = `Dommage, vous n'avez pas gagné cette fois pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
        }
        // Activer le formulaire d'inscription
        registrationForm.style.display = 'block';
    } else {
        message = `Dommage, vous n'avez pas attrapé tous les ballons à temps pour ${selectedCountry}. Peut-être pour le prochain match ! 🌍`;
        audioTimeout.play();
    }

    modalMessage.textContent = message;
    modalContent.style.display = 'block';
    modal.style.display = 'block';
}

startButton.addEventListener('click', startGame);

// Réglez l'affichage du modal lorsque le bouton replay est cliqué
replayButton.addEventListener('click', () => {
    playedOnce = true;
    startGame();
    displayModal();
});

// Fonction pour afficher le modal d'inscription
function displayModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Écouteur d'événement pour fermer le modal
document.getElementById('close-modal').addEventListener('click', () => {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

