class Iron{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8, 
            'friction': 3,
            'density': 30
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    strokeWeight(3);
    stroke('white')
    fill('red')
    rectMode(CENTER)
    rect(pos.x,pos.y, this.width, this.height);

    }
}