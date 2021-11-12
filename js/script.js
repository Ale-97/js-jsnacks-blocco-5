//------------Snack 1-------------//
// var palla ={
//     nome:'palla',
//     peso:10,
// }

// var nuovoPeso = prompt('Inserisci il peso della palla');
// palla.peso=nuovoPeso;

// var giochi=[palla];

// var nuovoGioco = prompt('Inserisci un nuovo gioco');

// giochi.push(nuovoGioco);

//------------Snack 2-------------//

// var triangoloRettangolo ={
//     catetoMaggiore:10,
//     catetoMinore:2,
// }

// var cateto1=triangoloRettangolo.catetoMaggiore;
// var cateto2=triangoloRettangolo.catetoMinore;

// var ipotenusa=Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

// var perimetro = cateto1 + cateto2 + ipotenusa;

// var area = cateto1 * cateto2 / 2;

//------------Snack 3-------------//

// function calcoloMediaArray(a) {
//     var somma = 0;

//     for (var x = 0; x < a.length; x++) {
//         somma += parseInt(a[x]);
//     }

//     var media = somma / a.length
//     return media;
// }

// var numeri = [10, 12, 8];
// console.log(calcoloMediaArray(numeri))



// var giocatori = [{
//     nome: 'michael',
//     cognome: 'jordan',
//     anno: 1950,
//     punteggio: 100,
// }, {
//     nome: 'lebron',
//     cognome: 'james',
//     anno: 1970,
//     punteggio: 80,

// }, {
//     nome: 'coby',
//     cognome: 'briant',
//     anno: 1980,
//     punteggio: 50,

// }];

// var mediaPunteggio=[];

// for(var y in giocatori){
//     for(var z in giocatori[y])
//     if(z ==='punteggio'){
//         mediaPunteggio.push(giocatori[y][z]);
//     }
// }

// console.log(calcoloMediaArray(mediaPunteggio))

//------------Snack 4-------------//

studenti = [{
    nome: 'Alessio',
    cognome: 'Piras',
    age: 22,
    descrizione:'',
}, {
    nome: 'Matteo',
    cognome: 'Gerano',
    age: 24,
    descrizione:'',
}, {
    nome: 'Federica',
    cognome: 'Lecca',
    age: 30,
    descrizione:'',
}];

for(var x in studenti){
    studenti[x].descrizione=prompt('inserisci la descrizione di ' + studenti[x].nome)
}

