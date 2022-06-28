var captainScore = 0;
var enemyScore = 0;
var btn_captain = document.getElementById("side_captian");
var btn_enemy = document.getElementById("side_enemy");
var divGame = document.getElementById("div-game");
var divGameOver = document.getElementById("div-gameOver");
var gameOverTextSpace = document.getElementById("gameOver_txt");
var gameOverText = "";

function selectGame(user){
    const enemy = enemyChoice();
    console.log("enemy choose: "+enemy);
    switch (user+enemy){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        case 'paperspock':
        case 'spockscissors':
        case 'spockrock':
        case 'lizardspock':
        case 'rocklizard':
        case 'lizardpaper':
        case 'scissorslizard':
            win(user, enemy);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
        case 'spockpaper':
        case 'scissorsspock':
        case 'rockspock':
        case 'spocklizard':
        case 'lizardrock':
        case 'paperlizard':
        case 'lizardscissors':
            lose(user, enemy);
            break;
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
        case 'spockspock':
        case 'lizardlizard':
            draw(user, enemy);
            break;
    }
}

function enemyChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

function win(user, enemy) {
    captainScore++;
    btn_captain.style.backgroundColor = "#c63342";
    alert("You win with "+user+"! Enemy choose "+enemy);
    paintScore();
    setTimeout(() => {
        btn_captain.style.backgroundColor = "#024d84";
    }, 300);
}

function lose(user, enemy) {
    enemyScore++;
    btn_enemy.style.backgroundColor = "#c63342";
    alert("You lose with "+user+", enemy choose "+enemy);
    paintScore();
    setTimeout(() => {
        btn_enemy.style.backgroundColor = "#024d84";
    }, 300);
}

function draw(user, enemy) {
    alert("You draw, booth choose "+enemy);
    paintScore();
}

function paintScore() {
    if(captainScore == 5 || enemyScore == 5) {
        if(captainScore > enemyScore) {
            gameOverText = "YOU WON THE GAME";
        }
        else {
            gameOverText = "YOU LOSE THE GAME";
        }
        gameOverTextSpace.innerHTML = gameOverText;
        divGame.style.display = 'none';
        divGameOver.style.display = 'flex';
    }
    else {
        score_captain.innerHTML = captainScore;
        score_enemy.innerHTML = enemyScore;
    }
}

function restart(){
    captainScore = 0;
    enemyScore = 0;
    score_captain.innerHTML = "0";
    score_enemy.innerHTML = "0";
}