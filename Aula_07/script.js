let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");


// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

// //linhas vermelha
// ctx2.beginPath();
// ctx2.lineWidth = 2;
// ctx2.fillStyle = 'red'
// ctx2.strokeStyle = 'red';
// ctx2.moveTo(0, 0); //mova para determinada posição(sem tocar na tela) é como se fosse uma mira x e y
// ctx2.lineTo(400, 400); // mova até a posição que definimos(tocando na tela)
// ctx2.stroke();//stroke mostra para o usuario o que fizemos, da cor as bordas, linhas etc
// ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.closePath();

//linha azul
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(400,0);
ctx2.lineTo(0,400);
ctx2.stroke();
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.closePath();

// Ordem de precedencia importa, se eu quiser que a linha fique acima do retangulo
// tem que ser codificado primeiro

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);
ctx2.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

//linhas azul
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0, 200); //mova para determinada posição(sem tocar na tela) é como se fosse uma mira
ctx2.lineTo(400, 200); // mova até a posição que definimos(tocando na tela)
ctx2.stroke();//stroke mostra para o usuario o que fizemos
ctx2.closePath();

//arcos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
//tamanho do carco, o 3 parametro é o raio e os dois ultimos são os pi que um circulo (que são 2)
ctx2.arc(200,200,50,0 * Math.PI,1 * Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "yellow"
ctx2.strokeStyle = "green";
ctx2.arc(75,150,15,0 * Math.PI,2.5 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//arcos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "yellow"
ctx2.strokeStyle = "green";
ctx2.arc(320,150,15,0 * Math.PI,2.5 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();




let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();


// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150); //mova para determinada posição(sem tocar na tela) é como se fosse uma mira
ctx.lineTo(60,10); // mova até a posição que definimos(tocando na tela)
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();//preenchimento 
ctx.stroke();//stroke mostra para o usuario o que fizemos
ctx.closePath();


// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
//tamanho do carco, o 3 parametro é o raio e os dois ultimos são os pi que um circulo (que são 2)
ctx.arc(200,200,50,1.5 * Math.PI,2.5 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 5; //define a espessura das linhas
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",205,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();




//canvas do cenário com casinha
let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext("2d");

// chao
ctx3.beginPath();
ctx3.fillStyle = 'darkgray';
ctx3.fillRect(0,290,400,400);
ctx3.closePath();
//a ordem de precedencia importa, dessa vez a arvore pode vir depois do chao
//arvore1
ctx3.beginPath();
ctx3.fillStyle = '#6d3c03';
ctx3.fillRect(340,285,20,55);
ctx3.closePath();

//folhas das arvores (tenho que fazer elipses)
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'green'
ctx3.strokeStyle = 'green';
ctx3.arc(350, 265, 30, 0, 2 * Math.PI);
ctx3.fill();
ctx3.stroke();
ctx3.closePath();

// Uma aparentemente cachoeira
ctx3.beginPath();
ctx3.fillStyle = '#5b8cd6ff'
ctx3.arc(10, 280, 45, 0, 2 * Math.PI);
ctx3.fill();
ctx3.closePath();
//parte da coluna da cachoeira
ctx3.beginPath();
ctx3.fillStyle = '#5b8cd6ff';
ctx3.fillRect(0,280,55,400);
ctx3.closePath();


//parte do chao da cachoeira
ctx3.beginPath();
ctx3.fillStyle = '#5b8cd6ff';
ctx3.fillRect(20,355,120,400);
ctx3.closePath();
// Uma aparentemente cachoeira
ctx3.beginPath();
ctx3.fillStyle = '#5b8cd6ff'
ctx3.arc(145, 400, 45, 0, 2 * Math.PI);
ctx3.fill();
ctx3.closePath();

//a ordem de precedencia importa, dessa vez a arvore pode vir depois do chao
//arvore2
ctx3.beginPath();
ctx3.fillStyle = '#6d3c03';
ctx3.fillRect(55,235,20,55);
ctx3.closePath();

//folhas das arvores (tenho que fazer elipses)
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'green'
ctx3.strokeStyle = 'green';
ctx3.arc(65, 215, 30, 0, 2 * Math.PI);
ctx3.fill();
ctx3.stroke();
ctx3.closePath();

//paredes da casinha
ctx3.beginPath();
ctx3.fillStyle = '#884b06ff';
ctx3.fillRect(155,190,90,100);
ctx3.fill();
ctx3.closePath();

//porta da casinha
ctx3.beginPath();
ctx3.fillStyle = '#472701ff';
ctx3.fillRect(190,240,20,50);
ctx3.fill();
ctx3.closePath();

//Janelas da casinha
//janela1
ctx3.beginPath();
ctx3.fillStyle = '#25d3f1ff';
ctx3.fillRect(165,215,25,25);
ctx3.fill();
ctx3.closePath();
//janela2
ctx3.beginPath();
ctx3.fillStyle = '#25d3f1ff';
ctx3.fillRect(210,215,25,25);
ctx3.fill();
ctx3.closePath();

//Telhado
ctx3.beginPath();                     // inicia um novo caminho (path)
ctx3.moveTo(200, 140);                 // posiciona o "pincel" no pico (não desenha)
ctx3.lineTo(155, 190);                // desenha linha até base esquerda
ctx3.lineTo(245, 190);     
ctx3.fillStyle = '#ec7e5cff';           // cor de preenchimento (vermelho telha)
ctx3.fill();  // desenha linha até base direita
ctx3.closePath();                     // conecta o ponto atual ao início (fecha o triângulo)

//Sol
ctx3.beginPath();
ctx3.fillStyle = '#fbff13'
ctx3.arc(300, 95, 47, 0, 2 * Math.PI);
ctx3.fill();
ctx3.closePath();
