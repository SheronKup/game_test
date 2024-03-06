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

}
function atualiza(){

}

//enzo vai trbalhar no prog principal
function main(){
    //comando de apaga tela
desenha()// enzo desenho do carro
atualiza()
}

setInterval(main,10)