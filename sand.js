class Sand{
    constructor (x,y,radius) {
var options = {
    density :5,
    friction : 1.0,
restitution : 0.5

}
this.radius=radius
    this.body=Bodies.circle(x,y,radius)
   World.add(world,this.body)

}
    
 display(){
var pos=this.body.position
     push ()
     translate(pos.x,pos.y)
     ellipseMode(RADIUS)
     strokeWeight(1)
     stroke("brown")        
        fill ("brown")
     ellipse(0,0,this.radius,this.radius)
                  pop ()                       
   
    
}
}  