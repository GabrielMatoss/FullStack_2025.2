// Faça um programa que receba quatro valores: I, A, B e C.
// Destes Valores, I é um valor inteiro valendo 1, 2 ou 3. A, B e C são valores reais. 
// Escreva os números A, B e C obedecendo à tabela a seguir, dependendo do valor de I.

let valorI = parseInt(prompt("Digite o valor de tipo inteiro I: "))
let n1 = parseFloat(prompt("Digite o valor de tipo real A: "))
let n2 = parseFloat(prompt("Digite o valor de tipo real B: "))
let n3 = parseFloat(prompt("Digite o valor de tipo real C: "))


let numMaior = 0
let numDoMeio = 0
let numMenor = 0
if (n1 <= n2 && n1 <= n3) {
    numMenor = n1;
    if (n2 <= n3) {
        numDoMeio = n2;
        numMaior = n3;
    } else {
        numDoMeio = n3;
        numMaior = n2;
    }
} else if (n2 <= n1 && n2 <= n3) {
    numMenor = n2;
    if (n1 <= n3) {
        numDoMeio = n1;
        numMaior = n3;
    } else {
        numDoMeio = n3;
        numMaior = n1;
    }
} else {
    numMenor = n3;
    if (n1 <= n2) {
        numDoMeio = n1;
        numMaior = n2;
    } else {
        numDoMeio = n2;
        numMaior = n1;
    }
}

if (valorI == 1){
     console.log("Ordem crescente:", numMenor, numDoMeio, numMaior);
} else if(valorI == 2){
    console.log("Ordem decrescente:", numMaior, numDoMeio, numMenor);
} else if (valorI == 3){
    console.log("Maior no meio:", numMenor, numMaiormaior, numDoMeio);
} else{
    console.log("Valor de I inválido, por favor digite 1, 2 ou 3");
}