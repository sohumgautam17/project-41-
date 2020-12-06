class Drops{
    constructor(x, y){
        var options = {
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

    }
    update(){

        
    }
    display()
    {
    push();
    fill(0, 0, 66);
    ellipse(this.x, this.y, this.r);
    pop();
    }
}