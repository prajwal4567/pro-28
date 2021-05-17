class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }
    attach(body){
       this.launch.bodyA=body;
    }

    display(){
        if(this.launch.bodyA){
        var pointa =this.launch.bodyA.position; 
        var pointb =this.pointB;
        line(pointa.x,pointa.y,pointb.x,pointb.y);
            
        }
    }
}
    
