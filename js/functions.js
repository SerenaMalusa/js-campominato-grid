/**
 * funzione che genera la griglia
 * @param {object} container elemento html in cui stampare la griglia
 * @param {number} cellNum numero di celle
 */
function createGrid (container, cellNum) {
    // creo variabile che sia uguale alla radice quadrata del numero di celle
    const square = Math.sqrt(cellNum);
    
    //creo un ciclo che conta da 0 a numero di celle -1 e per ogni giro
    for (let i=0; i < cellNum; i++) {
        
        // genero una cella (con indice giro)
        const cell = createCell(i,square);

        // la aggiungo come figlia all elem html grid_container
        container.append(cell);

    }
    
}

