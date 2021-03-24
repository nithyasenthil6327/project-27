class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:1,
            length:300
        }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);

    }
    display() {
        var pointAX = this.chain.bodyA.position.x+this.chain.pointA.x;
        var pointAY = this.chain.bodyA.position.y+this.chain.pointA.y;
        var pointBX = this.chain.bodyB.position.x+this.chain.pointB.x;
        var pointBY = this.chain.bodyB.position.y+this.chain.pointB.y;

        strokeWeight(3);
        stroke(0)
        line(pointAX,pointAY,pointBX,pointBY);
    }
}