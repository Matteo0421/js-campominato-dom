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

    this.innerHTML = (!this.classList.contains('clicked'))
                      ? this.innerHTML = numero
                      : this.innerHTML = '';

    this.classList.toggle('clicked');
    this.classList.toggle(getOddEvenClass(numero));

  })
  
  return sq;
}

function getOddEvenClass(n){
  if( n % 2 === 0 ){
    return 'even';
  }
  return 'odd';
}

function reset(){
  gridContainer.innerHTML='';
}