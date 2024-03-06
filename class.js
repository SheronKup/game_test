class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_obj(){
        draw.fillStyle = this.a
        draw.fillRect(this.x,this.y,this.w,this.h)
    }
}

class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 5

    des_carro(){
    // roda dianteira direita
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#232323'
    draw.fillStyle = '#000000'
    draw.rect(this.x+40, this.y-60, 10, 10)
    draw.closePath()
    draw.stroke()
    draw.fill()
    
    // roda dianteira esquerda
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#232323'
    draw.fillStyle = '#000000'
    draw.rect(this.x, this.y-60, 10, 10)
    draw.closePath()
    draw.stroke()
    draw.fill()
    
    // roda traseira direira
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#232323'
    draw.fillStyle = '#000000'
    draw.rect(this.x+40, this.y-20, 10, 10)
    draw.closePath()
    draw.stroke()
    draw.fill()
   
    // roda traseira esquerda
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#232323'
    draw.fillStyle = '#000000'
    draw.rect(this.x, this.y-20, 10, 10)
    draw.closePath()
    draw.stroke()
    draw.fill()

    // trapézio do carro
    draw.beginPath()
    draw.moveTo(this.x,this.y) // coordenadas x e y
    draw.lineTo(this.x+50,this.y)
    draw.lineTo(this.x+40,this.y-50)
    draw.lineTo(this.x+10,this.y-50)
    draw.closePath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#dd2828'
    draw.fillStyle = this.a
    draw.stroke()
    draw.fill()

    // desenhando corpo frente em um retângulo
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#dd2828'
    draw.fillStyle = this.a
    draw.rect(this.x+10,this.y-70,30,20)
    draw.closePath()
    draw.stroke()
    draw.fill()

    // desenhando a asa frontal em um retângulo
    draw.beginPath()
    draw.lineWidth = '5'
    draw.strokeStyle = '#dd2828'
    draw.fillStyle = this.a
    draw.rect(this.x,this.y-80,50,10)
    draw.closePath()
    draw.stroke()
    draw.fill()
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
        draw.fillStyle = this.a
        draw.fillRect(this.x,this.y,this.w,this.h)
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

