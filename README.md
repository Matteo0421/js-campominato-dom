Griglia Campo Minato
===

##  CONSEGNA
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## SVOLGIMENTO
1. creare struttuta index e css
2. seleziono il container e lo salvo in una costante
3. resetto
4. faccio un ciclo di 100 ripetizioni
5. ad ogni ciclo creo quadrato e lo aggiungo alla girglia

##  COME CREARE UN QUADRATO
1. creare l'elemento html
2. associare la classe del quadrato
3. associare il valore
4. associare un listener che al click mosti il valore e faccia il togle della classe 