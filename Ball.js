class Ball{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = width;
        this.width = height;
    }
    display(){
       
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}