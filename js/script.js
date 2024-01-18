// Al caricamento della pagina
// prendo gli elementi dal dom
const gridContainerEl = document.getElementById('grid_container');
const resetGridBtnEl = document.getElementById('header_btn');
const difficultySelectEL = document.getElementById('difficulty');

// genero la griglia da 100 celle in grid_container
createGrid (gridContainerEl, 100);

// Al click del bottone
resetGridBtnEl.addEventListener('click', function () {

    // svuoto la griglia presente
    gridContainerEl.innerHTML = ' ';

    //prendo il valore del select e lo salvo nella variabile tot celle
    const totCells = parseInt(difficultySelectEL.value);

    // rigenero la griglia da 100 celle in grid_container
    createGrid (gridContainerEl, totCells);

})
