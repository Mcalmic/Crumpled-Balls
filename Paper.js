class Paper{
    constructor(x, y, diameter){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        } 
        this.body = Bodies.circle(x, y, diameter/2);
        this.width = width;
        this.height = height;
        this.diameter = diameter;
        World.add(world, this.body);
    }
    display(){

        ellipse(this.body.position.x, this.body.position.y, this.diameter)

    }
    
}