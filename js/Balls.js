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
    ctx.arc(this.x, this.y,this.radius,0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.stroke();
    ctx.fill();
    }

    Balloon.prototype.updateBall = function(){ // condiciones de los limites internos.
        if(this.x + this.radius +35 > canvas.width  || this.x - this.radius -35 < 0){
            this.dx = -this.dx;
            console.log("colision x-axis")
        }
        if (this.y + this.radius +35 > canvas.height || this.y - this.radius -35 < 0){
            this.dy = -this.dy;
            console.log("colision y-axis")
        }
        this.x += this.dx;
        this.y += this.dy;
        if(this.radius >= canvas.width) console.log("updateBall: radius"+ this.radius)

        this.draw();
    }

   