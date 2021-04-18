// 1.	Using any of the tools you’ve worked with so far, create a game of tic-tac-toe.
// a.	A heading should say whether it is X’s or O’s turn and change with each move made.
// b.	Create a tic-tac-toe grid using your HTML element of choice. When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// c.	A button should be available to clear the grid and restart the game.
// d.	When a player has won, or the board is full and the game results in a draw, a Bootstrap banner should appear across the screen announcing the winner.


const boxes = Array.from(document.getElementsByClassName("box"));//make array from html collection

const restartBtn1 = document.getElementById("clearButton1");//clear buton for main page

const restartBtn2 = document.getElementById("clearButton2");//clear button for winning banner

const trackingText = document.getElementById("trackingText");//text to track turns and declare winner or draw

const spaces = [null, null, null, null, null,
     null, null, null, null];//empty array to fill with selections

const player1 = "O";//declaring players
const player2 = "X";

let currentPlayer = player1;//starting player
let reversePlayer = player2;//a way to change displayed player

let count = 0;//counter to find draw state

const winningMessageTextElement = document.querySelector('[data-winning-message]')//text declaring winner
const winningMessageElement = document.getElementById('winningMessage')//hidden element to display on a win or draw

//game function that handles what to do when a click happens
const playGame = () => {
  boxes.forEach((box) => {
        box.addEventListener("click", boxClicked);
        trackingText.innerHTML = `${currentPlayer}'s Turn!`

  });
};

trackingText.innerHTML = `${currentPlayer}'s Turn!`

//the logic of what to do during gameplay
function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    trackingText.innerHTML = `${currentPlayer}'s Turn!`
    count++;
    if (hasPlayerWon(currentPlayer)) {
      trackingText.innerHTML = `${currentPlayer} wins!`;
      winningMessageTextElement.innerText = `${currentPlayer} Wins!`
      winningMessageElement.classList.add('show')

      return;
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1
    if(count === 9){
        trackingText.innerText = `Draw`
        winningMessageElement.classList.add('show')
        winningMessageTextElement.innerText = 'Draw!'
    }
    }
}


//function to check win state
const hasPlayerWon = (player) => {
  //check win condition from top left, check across, down, and diagonal
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      return true;
    }
  }
      //check from bottom left diag
  if (spaces[6] === player) {
    if (spaces[4] === player && spaces[2] === player) {
      return true;
    }
}

  //from bottom right check up and across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      return true;
    }
    
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      return true;
    }
  }
};

//button to clear board
restartBtn1.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  trackingText.innerHTML = `${currentPlayer}'s Turn!`
  count =0;
  currentPlayer = player1;
});

//floating element button
restartBtn2.addEventListener("click", () => {
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    trackingText.innerHTML = `${currentPlayer}'s Turn!`
    winningMessageElement.classList.remove('show')
    count = 0;
    currentPlayer = player1;
  });

  //calling game function to make app run
playGame();


