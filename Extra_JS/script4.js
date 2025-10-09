// Faça um programa que receba duas notas de 6 alunos, calcule e mostre:  
// a média aritmética das duas notas de cada aluno; 

let aluno1 = [10, 6];
let aluno2 = [8, 6];
let aluno3 = [5, 6];
let aluno4 = [7, 6];
let aluno5 = [2, 6];
let aluno6 = [6, 6];

function media(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma / array.length;
}

let mediaAluno1 = media(aluno1);
let mediaAluno2 = media(aluno2);
let mediaAluno3 = media(aluno3);
let mediaAluno4 = media(aluno4);
let mediaAluno5 = media(aluno5);
let mediaAluno6 = media(aluno6);

if(mediaAluno1 <= 3){
    console.log("Aluno 1: Reprovado");
} else if(mediaAluno1 > 3 && mediaAluno1 <= 7){
    console.log("Aluno 1: Exame");
} else {
    console.log("Aluno 1: Aprovado");
}

if(mediaAluno2 <= 3){
    console.log("Aluno 2: Reprovado");
} else if(mediaAluno2 > 3 && mediaAluno2 <= 7){
    console.log("Aluno 2: Exame");
} else {
    console.log("Aluno 2: Aprovado");
}

if(mediaAluno3 <= 3){
    console.log("Aluno 3: Reprovado");
} else if(mediaAluno3 > 3 && mediaAluno3 <= 7){
    console.log("Aluno 3: Exame");
} else {
    console.log("Aluno 3: Aprovado");
}

if(mediaAluno4 <= 3){
    console.log("Aluno 4: Reprovado");
} else if(mediaAluno4 > 3 && mediaAluno4 <= 7){
    console.log("Aluno 4: Exame");
} else {
    console.log("Aluno 4: Aprovado");
}

if(mediaAluno5 <= 3){
    console.log("Aluno 5: Reprovado");
} else if(mediaAluno5 > 3 && mediaAluno5 <= 7){
    console.log("Aluno 5: Exame");
} else {
    console.log("Aluno 5: Aprovado");
}

if(mediaAluno6 <= 3){
    console.log("Aluno 6: Reprovado");
} else if(mediaAluno6 > 3 && mediaAluno6 <= 7){
    console.log("Aluno 6: Exame");
} else {
    console.log("Aluno 6: Aprovado");
}
