let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");


let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext("2d");

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'red';
ctx3.fillRect(0,0,50,50);
ctx3.closePath();



// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.closePath();
//linhas vermelha
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(10, 10); //mova para determinada posição(sem tocar na tela) é como se fosse uma mira
ctx2.lineTo(400, 400); // mova até a posição que definimos(tocando na tela)
ctx2.stroke();//stroke mostra para o usuario o que fizemos
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.closePath();

//linhas azul
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(400, 0); //mova para determinada posição(sem tocar na tela) é como se fosse uma mira
ctx2.lineTo(0, 400); // mova até a posição que definimos(tocando na tela)
ctx2.stroke();//stroke mostra para o usuario o que fizemos
ctx2.closePath();


// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.closePath();
// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);
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
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",205,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();