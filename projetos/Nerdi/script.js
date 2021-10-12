//ao abrir o site
//alert("Pressione F11 para melhor experiencia!!!")

//import
var btn = document.getElementById('bt');
var off = document.getElementById('mutado');
var play = document.getElementById('pause');

//botao
btn.onclick = function(){
    if(btn.value === 'desmute'){
        off.src = './img/on.png';
        btn.value = 'mute';
        play.muted = false;
    }
    else{
        off.src = './img/off.png';
        btn.value = 'desmute';
        play.muted = true;
    }
}