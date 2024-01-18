const results = document.querySelector(".result");
const yourScoreElement = document.querySelector(".your-score span");
const machineScoreElement = document.querySelector(".machine-score span");

let yourScore = 0;
let machineScore = 0;

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
};

const playMachine = () => {
    const choice = ['rock', 'papper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log(" Humano:" + human + " Maquina:" + machine);

    if (human === machine) {
        results.innerHTML = "Deu empate!";
    } else if (
        (human === 'papper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'papper')
    ) {
        results.innerHTML = "Você ganhou!";
        yourScore++;
    } else {
        results.innerHTML = "Você perdeu!";
        machineScore++;
    }

    // Atualiza a pontuação na tela
    yourScoreElement.textContent = yourScore;
    machineScoreElement.textContent = machineScore;
};
