// Al caricamento della pagina
// prendo gli elementi dal dom
const gridContainerEl = document.getElementById('grid_container');
const resetGridBtnEl = document.getElementById('header_btn');

// genero la griglia da 100 celle in grid_container
createGrid (gridContainerEl, 100);
