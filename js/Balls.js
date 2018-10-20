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
    ctx.arc(this.x, this.y, this.dx, this.dy, this.radius, 0, Math.PI * 2,false);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.fill();
    }

    Balloon.prototype.updateBall = function(){
        if(this.x + this.radius > this.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.height +150 || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }


    var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);


    function animateBall() {
        requestAnimationFrame(animateBall);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        balloon.update();
    }

   