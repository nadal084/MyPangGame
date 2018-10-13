 var ball;
 var ballsArray = [];
 var gravity = 1;
 var friction = 0.745;

 function Balloon(x,y,radius,dx, dy) { //funcion constructor de bola
     this.x= x;
     this.y = y;
     this.dx = dx;
     this.dy = dy;
     this.radius = radius;
 }

   this.update = function() {
       if( this.y + this.radius < this.canvas.height){
           this.dy = -this.dy;
       }else { this.y = this.gravity * this.friction;

        if ( this.x - this.radius < 0 || this.x + this.radius > this.canvas.width){
            this.dx = - this.dx;
        }
               

       }
   }

   this.draw();

 
 
   this.draw = function() {
   ctx.img.src = "imgs/bigBall.png"
   ctx.drawImage(this.img,this.x, this.y, this.dx, this.dy);
   }
 
 


 //implementation-->> should be on the main,¿maybe?
 function init() {
  this.ball = new Balloon(170,250, 30, 4, 1.3 ); 
}
  
 //animation
   function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0,0, canvas.width,canvas.height);


   }
  