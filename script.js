//Variaveis//
//Botao mutar/desmutar, passar a musica e volume
var botao = document.getElementById('play')
var play_audio = document.getElementById('play_musica')
var play_pause = document.getElementById('musicas')
//Passar a musica
var passar_musica = document.getElementById('next')
var botao_value = 1
var musica = document.getElementsByTagName('audio')
//Volume
var volume_botao = document.getElementById('volume')
var volume_icone = document.getElementById('icone_volume')
//Botao de copiar o email
var botao_copiar = document.getElementById('botao_email')
var p_copiar = document.getElementById('p_copiado')
var texto = document.querySelector("#input_email").value
//Minha foto
var data_animacao = document.querySelectorAll('[data-animacao]')
var animacao = 'animacao_on'


//Botao de o copiar email//
botao_copiar.onclick = function(){
    navigator.clipboard.writeText(texto)
    p_copiar.innerHTML = 'Copiado!'
    p_copiar.style = "display: block"
    setTimeout(() => {
        p_copiar.style = "display: none"
    }, 2000);
}

//Minha foto
//Funcoes
const debounce = function(func, wait, immediate){
    let timeout
    return function(...args){
      const context = this
      const later = function(){
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
}

function animacao_scroll(){
    const window_top = window.pageYOffset - (window.innerHeight * 3.1)
    data_animacao.forEach(function(elemento){
        if ((window_top) > elemento.offsetTop){
            elemento.classList.add(animacao)
        }
        else{
            elemento.classList.remove(animacao)
        }
    })
}

animacao_scroll()

if (data_animacao.length){
    window.addEventListener('scroll', debounce(function(){
        animacao_scroll()
    }, 200))
}

//Mutar/Desmutar//
botao.onclick = function(){
    if (botao.value === 'play'){
        play_audio.classList.remove('fa-play-circle')
        play_audio.classList.add('fa-pause-circle')
        botao.value = 'pause'
        play_pause.play() = true
    }
    else{
        play_audio.classList.remove('fa-pause-circle')
        play_audio.classList.add('fa-play-circle')
        botao.value = 'play'
        play_pause.pause() = true
    }
}

//Volume
volume_botao.onclick = function(){
    if (volume_botao.value === 'volume_inicial'){
        volume_icone.classList.remove('fa-volume-up')
        volume_icone.classList.add('fa-volume-down')
        play_pause.volume = '0.5'
        volume_botao.value = '50'
    }
    else if (volume_botao.value === '50'){
        volume_icone.classList.remove('fa-volume-down')
        volume_icone.classList.add('fa-volume-off')
        play_pause.volume = '0'
        volume_botao.value = '100'
    }
    else if (volume_botao.value === '100'){
        volume_icone.classList.remove('fa-volume-off')
        volume_icone.classList.add('fa-volume-up')
        play_pause.volume = '1'
        volume_botao.value = 'volume_inicial'
    }
}

//Passar a musica//
//Funcoes
function value_musica(){
    if (passar_musica.value != '15'){
        botao_value += 1
        passar_musica.value = botao_value.toString()
        musica[0].src = `musicas/musica_${passar_musica.value}.mp3`
    }
    else{
        botao_value = 1
        passar_musica.value = 1
        musica[0].src = 'musicas/musica_1.mp3'
    }
}

function alteracoes(){
    play_audio.classList.remove('fa-play-circle')
    play_audio.classList.add('fa-pause-circle')
    botao.value = 'pause'
    play_pause.play() = true
}

passar_musica.onclick = function(){
    value_musica()
    alteracoes()
}
