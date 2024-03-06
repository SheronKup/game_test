class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}

class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 5

    des_carro(){
    // roda dianteira direita
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#232323'
    des.fillStyle = '#000000'
    des.rect(this.x+40, this.y-60, 10, 10)
    des.closePath()
    des.stroke()
    des.fill()
    
    // roda dianteira esquerda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#232323'
    des.fillStyle = '#000000'
    des.rect(this.x, this.y-60, 10, 10)
    des.closePath()
    des.stroke()
    des.fill()
    
    // roda traseira direira
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#232323'
    des.fillStyle = '#000000'
    des.rect(this.x+40, this.y-20, 10, 10)
    des.closePath()
    des.stroke()
    des.fill()
   
    // roda traseira esquerda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#232323'
    des.fillStyle = '#000000'
    des.rect(this.x, this.y-20, 10, 10)
    des.closePath()
    des.stroke()
    des.fill()

    // trapézio do carro
    des.beginPath()
    des.moveTo(this.x,this.y) // coordenadas x e y
    des.lineTo(this.x+50,this.y)
    des.lineTo(this.x+40,this.y-50)
    des.lineTo(this.x+10,this.y-50)
    des.closePath()
    des.lineWidth = '5'
    des.strokeStyle = '#dd2828'
    des.fillStyle = this.a
    des.stroke()
    des.fill()

    // desenhando corpo frente em um retângulo
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#dd2828'
    des.fillStyle = this.a
    des.rect(this.x+10,this.y-70,30,20)
    des.closePath()
    des.stroke()
    des.fill()

    // desenhando a asa frontal em um retângulo
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle = '#dd2828'
    des.fillStyle = this.a
    des.rect(this.x,this.y-80,50,10)
    des.closePath()
    des.stroke()
    des.fill()
    }

    atual_carro(){

    }

    point(Objeto){

    }

    colid(Objeto){

    }

}

class Inimigo extends Carro{
    atual_inimigo(){

    }

    recomeca(){

    }
 }

 class Estrada extends Obj{
    des_estrada(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    mov_estrada(){

    }
}

 class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)

    }
}

