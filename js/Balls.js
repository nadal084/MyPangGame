 var ball;
 var ballsArray = [];
 var gravity = 1;
 var friction = 0.745;

 function Balloon(x, y, radius, dx, dy) { //funcion constructor de bola
     this.x = x;
     this.y = y;
     this.dx = dx;
     this.dy = dy;
     this.radius = radius;

    }
    Balloon.prototype.draw = function(){
    ctx.beginPath();
    console.log("Draw: radius"+this.radius)

    ctx.arc(this.x, this.y, this.dx, this.dy, this.radius, Math.PI * 2);
    
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.fill();
    }

    Balloon.prototype.updateBall = function(){
        if(this.x + this.radius > canvas.width  || this.x + this.radius < 0){
            this.dx = -this.dx;
            console.log("colision x-axis")
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
            console.log("colision y-axis")
        }
        this.x += this.dx;
        this.y += this.dy;
        if(this.radius <= 0) console.log("updateBall: radius"+this.radius)

        this.draw();
    }


 /*    var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);

   
   Balloon.prototype.animateBall = function() {
        requestAnimationFrame(this.animateBall);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        balloon.updateBall();
   } */

   