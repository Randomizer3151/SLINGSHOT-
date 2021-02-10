class Slingshot{
constructor(body1,point2){
var options={
    bodyA:body1,
    pointB:point2,
    stiffness:0.44,
    length:100
}
this.pointB=point2;
this.sling= Constraint.create(options);
World.add(world,this.sling);
}

fly(){
this.sling.bodyA=null;

}
display(){

    if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);

    }
}
}