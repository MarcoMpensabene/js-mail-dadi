// > Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array

const array = [];

for (let i = 0 ; i < 6 ; i++){
    let userNumber = Number.parseInt(prompt("Inserisci un numero intero") , 10);
    if (userNumber % 2 === 0 ){
        array.push(userNumber);
}
}