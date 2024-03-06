let des = document.getElementById('des').getContext('2d')

let carro = new Carro(400,500,50,80,'red')
let inimigo = new Inimigo(90,-200,50,80,'yellow')
let inimigo2 = new Inimigo(90,-200,50,80,'green')
let estradaL = new Estrada(2,2,10,698,'#f5f5f5')
let estradaR = new Estrada(488,2,10,698,'f5f5f5')
let estradaC1 = new Estrada(246,10,10,80,'f5f5f5')
let estradaC2 = new Estrada(246,200,10,80,'f5f5f5')
let estradaC3 = new Estrada(246,400,10,80,'f5f5f5')
let estradaC4 = new Estrada(246,600,10,80,'f5f5f5')

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

let motor = new Audio('./assets/songs/f1Idle.wav')
let batida = new Audio('./assets/songs/carCrash.mp3')
let somDeFundo = new Audio('./assets/songs/backgroundSound.wav')
let fimDeJogo = new Audio('./assets/songs/gameOver.wav')

motor.volume = 0.7
motor.loop = true
batida.volume = 0.4
batida.loop = false 
somDeFundo.volume = 0.9
somDeFundo.loop = true
fimDeJogo.volume = 0.8

let play = true 

//criando os controles
document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        carro.dir -= 8
        console.log("esquerda = ",carro.dir)
    }else if(e.key === 'd'){
        carro.dir += 8
        console.log("direita =",carro.dir)
    }
})

document.addEventListener('keyup',(e)=>{
if(e.key === 'a'){
    carro.dir = 0
}else if(e.key === 'd'){
    carro.dir = 0
}
}
)

function desenha(){
    t1.des_text('Points: ', 360, 29, 'aliceblue', '26px Times')
    t3.des_text(f1.pts, 440, 29, 'aliceblue', '26px Times')
    t2.des_text('Lifes: ', 40, 29, 'aliceblue', '26px Times')
    t4.des_text(f1.life, 110, 29, 'aliceblue', '26px Times')
    
    if(play){
        estradaL.des_estrada()
        estradaR.des_estrada()
        estradaC1.des_estrada()
        estradaC2.des_estrada()
        estradaC3.des_estrada()
        estradaC4.des_estrada() 
        inimigo.des_carro()
        inimigo2.des_carro()
        carro.des_carro()
    }else{
        estradaL.des_estrada()
        estradaR.des_estrada()
        estradaC1.des_estrada()
        estradaC2.des_estrada()
        estradaC3.des_estrada()
        estradaC4.des_estrada()  
        t5.des_text('Game Over', 160, 300, 'aliceblue', '40px Times')
    }
}
function atualiza(){

}

//enzo vai trbalhar no prog principal
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,10)