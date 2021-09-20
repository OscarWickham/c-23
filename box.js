class Box {

   constructor(){

        var ball_options={
            restitution:1
          }   

        this.ball=Bodies.rectangle(200,100,20,20, ball_options);
        World.add(world,this.ball)
    }



display(){
    rectMode(CENTER);
    rect(this.ball.position.x, this.ball.position.y, 20,20)
}
}