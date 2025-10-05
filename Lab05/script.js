let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")


function quadrados(cor, tamanho, x, y){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho)
    ctx.fill();
    ctx.closePath();
}

quadrados("blue", 50, 0, 0)
quadrados("red", 50, 250, 0)
quadrados("red", 35, 115, 150) 
quadrados(50,"#00ffffff",-25,125);
quadrados(30,"#00ffffff",275,135);


function linhas(moveToX, moveToY, lineToX, lineToY, cor, lineWidth){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY)
    ctx.stroke();
    ctx.closePath();
}

quadradosLivres(0, 125, 25, 50, "#00f2ffff") //ordem de precedencia para a linha verde cortar a caixa azul
quadradosLivres(275, 137, 25, 25, "#00f2ffff") //ordem de precedencia para a linha verde cortar a caixa azul

linhas(0, 0, 150, 150, "blue", 1)
linhas(300, 0, 150, 150, "red", 1)
linhas(0, 150, 300, 150, "green", 1)
linhas(150, 150, 150, 290, "gray", 1)

function linhasCurvadas(x, y, raio, cor, anguloInicial, anguloFinal, lineWidth){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = cor;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.stroke();
    ctx.closePath();
}

linhasCurvadas(150, 150, 65, "green" , 1 * Math.PI, 0 * Math.PI, 1);
linhasCurvadas(150, 150, 87, "green" , 1 * Math.PI, 1.25 * Math.PI, 1);
linhasCurvadas(150, 150, 87, "green" , 1.75 * Math.PI, 0 * Math.PI, 1);
linhasCurvadas(150, 310, 85, "green" , 1 * Math.PI, 1.5 * Math.PI, 1);
linhasCurvadas(150, 320, 75, "green" , 1.5 * Math.PI, 0.5 * Math.PI, 1);


function arcos(x, y, raio, corPreenchimento, corBorda, anguloInicial, anguloFinal, lineWidth){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corBorda;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

arcos(150, 110, 18, "#00ffffff", "blue", 0 * Math.PI, 3 * Math.PI, 1);
arcos(70, 225, 18, "#fffb00ff", "green", 0 * Math.PI, 3 * Math.PI, 1);
arcos(225, 225, 18, "#fffb00ff", "green", 0 * Math.PI, 3 * Math.PI, 1);
arcos(150, 310, 50, "#00f2ffff", "green", 0 * Math.PI, 3 * Math.PI, 1);


function quadradosLivres( x, y, largura, altura, corPreenchimento) {
  ctx.beginPath();
  ctx.fillStyle = corPreenchimento;
  ctx.fillRect(x, y, largura, altura);
  ctx.closePath();
}

quadradosLivres(0, 275, 25, 25, "yellow")
quadradosLivres(0, 250, 25, 25, "yellow")
quadradosLivres(25, 275, 25, 25, "yellow")
quadradosLivres(275, 275, 25, 25, "black")
quadradosLivres(250, 275, 25, 25, "black")
quadradosLivres(275, 250, 25, 25, "black")



function escreverTexto(texto, x, y, corTexto, alinhamento) {
  ctx.beginPath();
  ctx.fillStyle = corTexto;
  ctx.font = "20px Arial";
  ctx.textAlign = alinhamento; 
  ctx.fillText(texto, x, y);
  ctx.closePath();
}
escreverTexto("Canvas", 150, 45, "black", "center");
