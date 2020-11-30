class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyB,
            bodyB:bodyB,
            stiffness:0.5,
            length:50,

       }
       this.chain = Constraint.create(options);
       World.add(world.this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        stokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}