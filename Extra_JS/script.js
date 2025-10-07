let trabalho = parseFloat(prompt("Digite a nota do trabalho de laboratório:"));
let avaliacao = parseFloat(prompt("Digite a nota da avaliação semestral:"));
let exame = parseFloat(prompt("Digite a nota do exame final:"));

// Cálculo da média ponderada
let media = (trabalho * 2 + avaliacao * 3 + exame * 5) / 10;

// Estrutura condicional para determinar o conceito
let conceito;

if (media >= 8.0 && media <= 10.0) {
  conceito = "A";
} else if (media >= 7.0) {
  conceito = "B";
} else if (media >= 6.0) {
  conceito = "C";
} else if (media >= 5.0) {
  conceito = "D";
} else {
  conceito = "E";
}

// Saída
console.log(`Média ponderada: ${media.toFixed(2)}`);
console.log(`Conceito: ${conceito}`);