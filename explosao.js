/**
 * Criando página com efeito de explosão
 * @author Letícia França
 */

let check = false;

function xequeMate(){
    if (check == false){
        let timer1 = setInterval(function(){start()}, 1000);
        let timer2 = setTimeout(function(){end()}, 13200);
        let count = 10;
        function start(){
            soundBeep();
            document.querySelector("#time").innerHTML = count;
            if (count == 0){
                clearInterval(timer1);
                soundThunder();
                document.querySelector("#fire").src = "/assets/img/explosion.gif";
                document.querySelector("#time").innerHTML = "GAME OVER";
            }
            count --;
        }
        check = true;
    }
}

function soundThunder(){
    let beep = new Audio();
    beep.src = "assets/audio/Thunder_Crack.mp3";
    beep.play();
}

function soundBeep(){
    let beep = new Audio();
    beep.src = "assets/audio/Beep_Short.mp3";
    beep.play();
}

function end(){
    document.querySelector("#fire").src = "/assets/img/clean.png";
}
