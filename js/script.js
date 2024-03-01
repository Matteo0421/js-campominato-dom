const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');


btnStart.addEventListener('click', startPlay)

//FUNZIONI

function startPlay(){
  reset();
  for(let i=1; i<= 100; i++){
    const square = getSquare(i);
    gridContainer.append(square);


  }
}

function getSquare(numero){

  const sq = document.createElement('div');
  sq.className = 'square';

  sq._sqID = numero;

  sq.addEventListener ('click', function(){
    const numero = this._sqID;

    console.log(numero);

    this.classList.add('clicked');

  })
  
  return sq;
}

function getBomb (numero){
  const sqBomb = document.createElement('div');
  sqBomb.className = 'square-bomb'

  sqBomb._sqID = numero;

  numero = 10;

}





function reset(){
  gridContainer.innerHTML='';
}