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
- do/levo alla cella la classe cliccata
- stampo in console l'attributo indice della cella

## Traccia Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 

## Svolgimento Bonus

### Al click del bottone
- svuoto la griglia presente
- prendo il valore del select e lo salvo nella variabile tot celle
- genero la griglia da tot celle in grid_container

--------------------------------------------------------------
### Traccia 3

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).   
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

### Svoglimento

1. creo una variabile punteggio massimo = al numero di celle - il numero di bombe
    - la variabile deve essere cambiata ogni volta che si resetta la griglia (al caricamento + al click del tasto reset)
2. creo una variabile punteggio = 0 
    -   il punteggio si deve resettare ogni volta che si resetta la griglia
2. ogni volta che si clicca su una cella che non è una bomba il punteggio aumenta di 1
3. quando il punteggio è uguale al punteggio massimo la partita finisce e la pagina genera un messaggio di vittoria
4. sia nel messaggio di vittoria che nel messaggio di sconfitta devo mostrare il punteggio ottenuto

### Bonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

### Svolgimento
al click di una bomba invoco la funzione show all bombs
- creo un ciclo che gira per tutte le celle
    - se il numero della cella è contenuto tra le bome aggiugno la classe bomb