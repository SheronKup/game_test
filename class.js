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
    this.x += this.dir
        if(this.x <=2){
            this.x = 2
        }else if(this.x >= 416){
            this.x = 416
        }
}

point(Objeto){
    if((objeto.y > 610) && (objeto.y < 618)){
        return true
    }
}

colid(Objeto){
    if((this.x < objeto.x + objeto.w)&&
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)){
            return true
        }
}

}

class Inimigo extends Carro{
    atual_inimigo(){
        this.y += 1
        if(this.y >= 780){
            this.recomeca()
        }
    }

    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o carro sair da tela
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

