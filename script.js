let nameHero;
let xpHero;
let result;

//função do botão enviar
function send(){
    nameHero = document.getElementById("nameHero").value;
    xpHero = document.getElementById("xpHero").value;
    console.log(nameHero);
    console.log(xpHero);
    showXP();
}

//função para exibir mensagem de nível do herói
function showXP(){
    if(xpHero<=1000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Ferro </p>"
    }
    else if (xpHero>=1001 && xpHero<=2000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Bronze </p>"
    }
    else if (xpHero>=2001 && xpHero<=5000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Prata </p>"
    }
    else if (xpHero>=5001 && xpHero<=7000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Ouro </p>"
    }
    else if (xpHero>=7001 && xpHero<=8000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Platina </p>"
    }
    else if (xpHero>=8001 && xpHero<=9000){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Ascendente </p>"
    }
    else if (xpHero>=10001){
        result = document.getElementById("result").innerHTML = "<p> O herói de nome " + nameHero + " está no nível Radiante </p>"
    }
}


