// > Il giocatore gioca contro il computer.
// >Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// > Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userNumber = Math.floor((Math.random() * 6) + 1); 
let computerNumber = Math.floor((Math.random() * 6) + 1); 

console.log(userNumber , computerNumber)

if (userNumber === computerNumber){
    console.log("Il risultato è pari" , userNumber , computerNumber)
} else if (userNumber > computerNumber){
    console.log("La vittoria spetta all'utente" , userNumber)
}   else {
    console.log("Il calcolatore vince sempre" , computerNumber)
}