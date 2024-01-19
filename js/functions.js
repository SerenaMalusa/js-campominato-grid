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
function createCell(cellIndex, cellsPerRow) {
    
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

        // console.log('click',cellIndex);
        handleCellClick(cell);

    })

    return cell;

}

/**
 * funzione che gestisce il click della cella
 * @param {object} cell cella da cliccare
 */
function handleCellClick(cell) {

    // prenDo l'attributo indice della cella
    let cellIndex = parseInt(cell.getAttribute('data-index'));

    if (!gameOver) {

        // se l'indice della cella è presente tra le bombe
        if (bombs.includes(cellIndex)) {
            
            //aggiungo la classe bomba
            cell.classList.add('bomb');
            alert('Mi dispiace hai perso');
            gameOver = true;
    
        // altrimenti
        } else { 
            
            // aggiungi cellIndex come testo della cella
            cell.innerText = cellIndex;
            // do alla cella la classe cliccata
            cell.classList.add('clicked');
    
        }

    }

}

/**
 * funzione che genera tot numeri causali nel range dato
 * @param {number} totbombs - numero di bombe che verranno generate
 * @param {number} bombMax - numero massimo che la bomba può avere (incluso)
 * @param {number} bombMin - numero minoimo che la bomba può avere, default 1
 */
function genBombs(totBombs, bombMax, bombMin = 1) {

    // creo array che conterrà le bombe
    const bombs = [];

    // finchè il mio array non sarà lungo 16
    while (bombs.length < totBombs) {

        // genero 1 numero casuale da 1 a range
        const bomb = Math.floor(Math.random() * (bombMax - bombMin) + bombMin);

        // se il mio array non contiene già quel numero, lo aggiungo 
        if (!bombs.includes(bomb)) bombs.push(bomb);

    }

    return bombs;

}