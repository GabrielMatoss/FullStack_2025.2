let titulo = document.getElementById("titulo").innerHTML;
console.log(titulo);

document.getElementById("nome").innerHTML = "Batatinha";

// let nome = window.prompt("Digite seu nome:");
// let idade = window.prompt("Digite sua idade:");
// let ano_atual = window.prompt("Digite o ano atual");
// let ano_nasc = ano_atual - idade;

// let resposta = `Olá ${nome}, o seu  ano de nascimento é de: ${ano_nasc}`
// document.getElementById("resposta_ex1").innerHTML = resposta;


// function exibeMensagem(){
//     console.log("Exemplo de mensagem");
// }


// function exibirMensagemComParametro(texto){
//     console.log(texto);
// }

// exibirMensagemComParametro("Olá Mundo!");
// exibirMensagemComParametro("");
// exibirMensagemComParametro("Olá Mundo!");

function soma(a, b){
    let total = a + b;
    return total;
}

function multi(a, b){
    let total = a * b;
    return total;
}
// console.log("A soma de A + B: " + soma(5,5));
// console.log("A soma de A + B: " + soma(7,9));
// console.log("A soma de A + B: " + soma(10,5));

// function subtracao(a, b){
//     let total = a - b;
//     return total;
// }

// console.log("A subtração de A - B: " + subtracao(10, 5));

// function imprimeTexto(){
//     let texto = document.getElementById("input_1").value;
//     console.log(texto);
// }



function acrescentaUm(){
    let x = parseInt(document.getElementById("number2").value);
     document.getElementById("respost_e2").innerHTML = "";
    for(let i = 0; i < x; i++){
        console.log(x);
        let resposta = document.getElementById("respost_e2").innerHTML + " " + i;
        document.getElementById("respost_e2").innerHTML = resposta;
    }
}


function imprimeSoma(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let total = soma(num1, num2);
    document.getElementById("resposta_exec3").innerHTML = total;
}


function imprimeCalculo(){
    let a = parseInt(document.getElementById("num3").value);
    let b = parseInt(document.getElementById("num4").value);
    let total = 0;
    if (a < 0 || b < 0){
        total = soma(a, b)
    } else{
        total = multi(a, b)
    }
    document.getElementById("resposta_exec4").innerHTML = total;
}