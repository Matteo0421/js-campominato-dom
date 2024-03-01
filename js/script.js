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
  reset()
}


function reset(){
  gridContainer.innerHTML='';
  bombePosizionate = [];

}