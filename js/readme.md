## Traccia

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.  
Ogni cella ha un numero progressivo, da 1 a 100.  
Ci saranno quindi 10 caselle per ognuna delle 10 righe.  
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 

## Svolgimento

### Al caricamento della pagina
- prendo gli elementi dal dom
- genero la griglia da 100 celle in grid_container

### Al click del bottone
- svuoto la griglia presente
- genero la griglia da 100 celle in grid_container

#### funzione che genera la griglia (nell'elemento html, numero di celle)
- creo variabile che sia uguale alla radice quadrata del numero di celle
- creo un ciclo che conta da 0 a numero di celle -1 e per ogni giro
    - genero una cella (con indice giro, radice)
    - la aggiungo come figlia all elem html grid_container

#### funzione che genera la cella (indice cella, radice)
- creo la cella
- do alla cella la classe cella
- do alla cella larghezza uguale alla radice del numero di celle
- do alla cella l'attributo indice cella
- al click della cella
    - gestisco il click della cella
- restituisco la cella

#### funzione che gestisce il click della cella
- do alla cella la classe azzurro
- stampo in console l'attributo indice della cella