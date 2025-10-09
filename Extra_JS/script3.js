// Faça um programa que receba a altura e o peso de uma pessoa. De acordo com a tabela a seguir, 
// verifique e mostre qual a classificação (A, B, C, D, E, F, G, H e I) dessa pessoa.

let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));

if(altura < 1.20){
    if(peso <= 60){
        console.log("Classificação: A");
    } else if(peso >= 60 && peso <= 90){
        console.log("Classificação: D");
    } else {
        console.log("Classificação: G");
    }
} else if (altura >= 1.20 && altura <= 1.70){
    if(peso <= 60){
        console.log("Classificação: B");
    } else if(peso >= 60 && peso <= 90){
        console.log("Classificação: E");
    } else {
        console.log("Classificação: H");
    }
} else {
    if(peso <= 60){
        console.log("Classificação: C");
    } else if(peso >= 60 && peso <= 90){
        console.log("Classificação: F");
    } else {
        console.log("Classificação: I");
    }
}
