class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill(100,100,100);
      strokeWeight(4);
      stroke(150,150,150)
      circle(pos.x, pos.y, (2*this.radius));
    }
  };
  