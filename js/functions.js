/**
 * funzione che genera la griglia
 * @param {object} container elemento html in cui stampare la griglia
 * @param {number} totCells numero di celle da generare
 */
function createGrid (container, totCells) {
    // creo variabile che sia uguale alla radice quadrata del numero di celle
    const cellsPerRow = Math.sqrt(totCells);
    
    //creo un ciclo che conta da 0 a numero di celle -1 e per ogni giro
    for (let i=0; i < totCells; i++) {
        
        // genero una cella (con indice giro)
        const cell = createCell(i,cellsPerRow);

        // la aggiungo come figlia all elem html grid_container
        container.append(cell);

    }
    
}

/**
 * funzione che genera la cella
 * @param {number} cellIndex indice/numero cella
 * @param {number} cellsPerRow numero di celle per riga
 */
function createCell(cellIndex,cellsPerRow) {
    
    // creo la cella
    const cell = document.createElement('div');

    // do alla cella la classe cella
    cell.classList.add('cell');

    // do alla cella larghezza uguale alla radice del numero di celle
    cell.style.height = `calc(100% / ${cellsPerRow})`;

    // do alla cella l'attributo indice cella
    cell.setAttribute('data-index',cellIndex+1);

    // al click della cella
    cell.addEventListener('click', function () {
        // console.log('click',cellIndex+1);
        handleCellClick(cell);
    })

    return cell;

}

/**
 * funzione che gestisce il click della cella
 * @param {object} cell cella da cliccare
 */
function handleCellClick(cell) {

    // do/levo alla cella la classe cliccata
    cell.classList.add('clicked');

    // stampo in console l'attributo indice della cella
    console.log(cell.getAttribute('data-index'));

}