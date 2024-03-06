class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
}

class Carro extends Obj{
dir = 0
pts = 0
vida = 5

des_carro(){

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

  }
mov_estrada(){

}}

 class Text{

    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)

 }}

