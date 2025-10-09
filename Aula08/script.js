// Array = Lista
// let idades = [20, 19];
// console.log(idades);

// idades.push(25);
// console.log(idades);

// let removidoPop = idades.pop();
// console.log(removidoPop)
// console.log(idades)

// //delete conseguimos especificar qem retiramos, passando o indice
// delete idades[0];
// console.log(idades);

let carro_1 = {
    posicao: 0,
    cor: "red",
    modelo: "Corolla",
    buzinar: function(){
        console.log("bii-bii");
    },
    andar: function(qtde){
        this.posicao += qtde;
    }
}

carro_1.buzinar();

console.log("posição atual: " + carro_1.posicao)
carro_1.andar(3);
console.log("posição atual: " + carro_1.posicao)

let carro_2 = {
    posicao: 0,
    cor: "blue",
    modelo: "Fusca",
    buzinar: function(){
        console.log("fom-fom");
    },
    andar: function(qtde){
        this.posicao += qtde;
    }
};

let carros = [carro_1, carro_2];

for(let i = 0; i < carros.length; i++){
    let carro = carros[i];
    console.log(carro.modelo);
    carro.buzinar();
}

//se desenhando no canvas
let retangulo1 = {
    lw: 2,
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor_preenchiemnto: "blue",
    cor_linha: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchiemnto;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.strokeRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
};

let retangulo2 = {
    lw: 2,
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    cor_preenchiemnto: "green",
    cor_linha: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchiemnto;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.strokeRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
};

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

retangulo1.desenha();

// retangulo1.x = 340;
// // retangulo1.y = 340;
// retangulo1.cor_preenchiemnto = "green";
retangulo2.desenha();

let aux = 1;
function animacao(){
    ctx.clearRect(0, 0, 400, 400);

    // if(retangulo1.x > 350){
    //     aux = -1
    // } else if(retangulo1.x == 0){
    //    aux = 1
    // }

    // retangulo1.x += aux;

    retangulo1.desenha();
    retangulo2.desenha();
    bola.desenha();

    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);
    let vel = 20
    if(tecla == "ArrowUp"){
        retangulo1.y -= vel;
    }
    if(tecla == "ArrowDown"){
        retangulo1.y += vel;
    }

    if(tecla == "ArrowLeft"){
        retangulo1.x -= vel;
    }

    if(tecla == "ArrowRight"){
        retangulo1.x += vel;
    }
})

addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    console.log(x_mouse);
    console.log(y_mouse);

    bola.x = x_mouse;
    bola
    .y = y_mouse;
});