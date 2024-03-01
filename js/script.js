const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');
let bombePosizionate = [];

btnStart.addEventListener('click', startPlay)

//FUNZIONI

function startPlay(){
  reset();
  for(let i=1; i<= 100; i++){
    const square = getSquare(i);
    gridContainer.append(square);


  }

  addBombs();
}

function getSquare(numero){

  const sq = document.createElement('div');
  sq.className = 'square';

  sq._sqID = numero;

  sq.addEventListener('click', function() {
    const numero = this._sqID;
    if (bombePosizionate.includes(numero)) {
      this.classList.add('square-bomb');
      endGame();
      console.log("Bomba cliccata!");
    } else {
      this.classList.add('clicked');
    }

  })
  
  return sq;
}


function addBombs() {
  const numBombe = 16;
  while (bombePosizionate.length < numBombe) {
    const posizioneCasuale = Math.floor(Math.random() * 100) + 1;
    if (!bombePosizionate.includes(posizioneCasuale)) {
      bombePosizionate.push(posizioneCasuale);
    }
  }
}


function endGame() {
  let punteggio = 0;

  const squareElements = document.querySelectorAll('.square');

  for (let i = 0; i < squareElements.length; i++) {
      const square = squareElements[i];

      if (!square.classList.contains('square-bomb') && square.classList.contains('clicked')) {
          punteggio++;
      }
  }

  const finalMessage = document.getElementById('final-message');

  const message = `
      <p>Hai perso la partita!</p>
      <p>Punteggio: ${punteggio}</p>
  `;

  finalMatch();
  finalMessage.innerHTML = message;

}

function finalMatch(){
  gridContainer.classList.add('final-match');

}

function reset(){
  gridContainer.innerHTML='';
  bombePosizionate = [];

}