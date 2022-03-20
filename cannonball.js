class Cannonball{

    constructor(x,y){
        this.x=x
        this.y=y
        this.radius=30

        var cannonballOptions={

            isStatic:true

        }


        this.body=Bodies.circle(x,y,this.radius,cannonballOptions)
        World.add(world,this.body)
        this.image=loadImage("assets/cannonball.png")


    }
    
    display(){
        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();

    }
        





}