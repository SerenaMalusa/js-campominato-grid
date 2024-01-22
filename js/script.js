// Al caricamento della pagina
// prendo gli elementi dal dom
const gridContainerEl = document.getElementById('grid_container');
const resetGridBtnEl = document.getElementById('header_btn');
const difficultySelectEL = document.getElementById('difficulty');
const headerPointsEl = document.getElementById('header_points');
const pointsCounterEl = document.getElementById('points_counter');

// genero la griglia da 100 celle in grid_container
createGrid (gridContainerEl, 100);

// genero 16 bombe da 1 a 100
let bombs = genBombs (16,100);
console.log(bombs);

// variabile switch di fine gioco
let gameOver = false;

// creo una variabile punteggio massimo = al numero di celle - il numero di bombe
let maxPoints = 100 - bombs.length;

// creo una variabile punteggio = 0 
let userPoints = 0;

// Al click del bottone
resetGridBtnEl.addEventListener('click', function () {

    gameOver = false;

    // svuoto e resetto la griglia presente
    gridContainerEl.innerHTML = ' ';
    gridContainerEl.classList.remove('game-over');

    //prendo il valore del select e lo salvo nella variabile tot celle
    const totCells = parseInt(difficultySelectEL.value);

    // genero un numero di bombe casuali in base alla difficoltà
    bombs = genBombs (16,totCells);
    console.log(bombs);

    // rigenero il punteggio massimo in base alla difficoltà
    maxPoints = totCells - bombs.length;

    // resetto il punteggio utente
    userPoints = 0;
    pointsCounterEl.innerText = '00';

    // rigenero la griglia da totCelle in grid_container
    createGrid (gridContainerEl, totCells);

})

