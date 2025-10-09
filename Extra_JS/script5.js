// Faça um programa para calcular a área de um triângulo.
// Esse programa não pode permitir a entrada de dados inválidos, ou seja, medidas menores ou iguais a 0. 

let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));

if (base > 0 && altura > 0) {
  let area = (base * altura) / 2; // Cálculo da área do triângulo
  console.log("A área do triângulo é: " + area);
} else {
  console.log("Valores inválidos! A base e a altura devem ser maiores que 0.");
}
