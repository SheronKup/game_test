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

function pontos(){
    if(carro.point(c2)){
        carro.pts += 1
    }else if(carro.point(c3)){
        carro.pts += 1
    }
}

function colisao(){
    if(carro.colid(c2)){
        carro.vida -= 1
        c2.recomeca()
        batida.play()
    }else if(carro.colid(c3)){
        carro.vida -= 1
        c3.recomeca()
        batida.play()
    }
}

function desenha(){

}
function atualiza(){
    musica_fundo.play()
    ec1.mov_est()
    ec2.mov_est()
    ec3.mov_est()
    ec4.mov_est()
    ec5.mov_est()
    ec6.mov_est()
    ec7.mov_est()
    c2.atual_carro2()
    c3.atual_carro2()
    carro.atual_carro()
    pontos()
    colisao()
}

function main(){
desenha()
atualiza()
}

setInterval(main,10)