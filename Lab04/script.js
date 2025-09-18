let input = parseInt(document.getElementById("input_number").value);
console.log(input);
let r = Math.random() * 100;
let f = Math.floor(r);
function Guess(){
    console.log(f);
    if(input < f){
        return document.getElementById("tentativas_g").innerHTML = input.toString();
    } else if( input > f){
       return document.getElementById("tentativas_p").innerHTML = input.toString();
    }
    else{
       return  document.getElementById("acerto").innerHTML = "Acertou!!!!";
    }    
}