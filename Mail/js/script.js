// > Chiedi all’utente la sua email,
// > controlla che sia nella lista di chi può accedere,
// > stampa un messaggio appropriato sull’esito del controllo.

const userEmail = prompt("Inserisci la tua email")
const emailList = ["marco@gmail.com" ,"marco1@gmail.com" , "marco2@gmail.com" ,"marco3@gmail.com", "marco4@gmail.com", "marco5@gmail.com" ];

console.log(userEmail)

if (emailList.includes(userEmail.toLowerCase().trim())){
    console.log("You can login")
} else {
    console.log("Go away from me!")
}

