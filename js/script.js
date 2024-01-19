// Al caricamento della pagina
// prendo gli elementi dal dom
const gridContainerEl = document.getElementById('grid_container');
const resetGridBtnEl = document.getElementById('header_btn');
const difficultySelectEL = document.getElementById('difficulty');

// genero la griglia da 100 celle in grid_container
createGrid (gridContainerEl, 100);
// genero 16 bombe da 1 a 100
let bombs = genBombs (16,100);
console.log(bombs);

let gameOver = false;

// Al click del bottone
resetGridBtnEl.addEventListener('click', function () {

    gameOver = false;

    // svuoto la griglia presente
    gridContainerEl.innerHTML = ' ';

    //prendo il valore del select e lo salvo nella variabile tot celle
    const totCells = parseInt(difficultySelectEL.value);

    // rigenero la griglia da totCelle in grid_container
    createGrid (gridContainerEl, totCells);

    // genero un numero di bombe casuali in base alla difficoltà
    bombs = genBombs (16,totCells);
    console.log(bombs);

})

