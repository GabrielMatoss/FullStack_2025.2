let random_value = Math.random() * 100;
let value_guess = Math.floor(random_value);

function Guess(){
    let input_user = parseInt(document.getElementById("input_number").value);
    
    if(input_user > value_guess){
        document.getElementById("tentativas_g").style.setProperty("background-color", "rgba(255, 48, 48, 1)");
        return document.getElementById("tentativas_g").innerHTML += `${input_user} `; 
    }
    else if(input_user < value_guess)
    {
        document.getElementById("tentativas_p").style.setProperty("background-color", "rgba(255, 48, 48, 1)");
        return document.getElementById("tentativas_p").innerHTML += `${input_user} `; 
    }
    else{
        document.getElementById("sucesso").style.setProperty("background-color", "green");
        return document.getElementById("sucesso").innerHTML = "Acertou!!!";
    }
}

