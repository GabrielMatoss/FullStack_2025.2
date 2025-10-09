let soma = 0;
let quantidade = 0;
let maior = null;
let menor = null;
let somaPares = 0;
let qtdPares = 0;
let qtdImpares = 0;

while (true) {
  let entrada = prompt("Digite um número (ou 'sair' para finalizar):");

  if (entrada.toLowerCase() === "sair") {
    break;
  }

  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    console.log("Valor inválido! Digite um número ou 'sair'.");
    continue;
  }

  // Soma total e contagem
  soma = soma + numero;
  quantidade = quantidade + 1;

  // Maior e menor
  if (maior === null || numero > maior) {
    maior = numero;
  }

  if (menor === null || numero < menor) {
    menor = numero;
  }

  // Par ou ímpar
  if (numero % 2 === 0) {
    somaPares = somaPares + numero;
    qtdPares = qtdPares + 1;
  } else {
    qtdImpares = qtdImpares + 1;
  }
}

// Exibição dos resultados
if (quantidade > 0) {
  let mediaGeral = soma / quantidade;
  let mediaPares;
  let porcentagemImpares;

  if (qtdPares > 0) {
    mediaPares = somaPares / qtdPares;
  } else {
    mediaPares = 0;
  }

  porcentagemImpares = (qtdImpares / quantidade) * 100;

  console.log(
    "Soma dos números: " + soma +
    "\nQuantidade de números: " + quantidade +
    "\nMédia geral: " + mediaGeral.toFixed(2) +
    "\nMaior número: " + maior +
    "\nMenor número: " + menor +
    "\nMédia dos pares: " + mediaPares.toFixed(2) +
    "\nPorcentagem de ímpares: " + porcentagemImpares.toFixed(2) + "%"
  );
} else {
  console.log("Nenhum número foi digitado.");
}
