//let numeroAlunos = 5;

let listaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo", "Erick", "Dania"];

let contador = 0;

while (contador< listaAlunos.length) {
    
    if(contador == 0) {
        console.log(contador + ": ZERO: " + listaAlunos[contador]); //concatenação
    } else if (contador % 2 != 0) {
        console.log(`${contador}: ÍMPAR: ${listaAlunos[contador]}`); //interpolação
    } else {
        console.log(`${contador}: PAR: ${listaAlunos[contador]}`);
    }

    contador++;
}

/*
for(let contador = 0; contador < listaAlunos.length; contador++) {
    //console.log(contador)

    if(contador == 0) {
        console.log(contador + ": ZERO"); //concatenação
    } else if (contador % 2 != 0) {
        console.log(`${contador}: ÍMPAR `); //interpolação
    } else {
        console.log(`${contador}: PAR `);
    }
}
*/