var harpoonsArray = [];

 function Harpoon(playerpositionX ,y, speed) {
     this.x = playerpositionX;
     this.y = y;
     this.speed = speed;
 }
 
  harpoon.prototype.drawHarpoon = function(x, y) {
          ctx.beginpath();
          ctx.fillStyle = "rgba(44, 133, 240)";
          ctx.fillRect(this.x, this.y, 20,20);
          ctx.stroke();
          this.y += 3.5;
          
      }
    
    Harpoon.prototype.updateHarpoon = function(){
        if(this.y > canvas.height){
            this.y = ctx.clearRect(this.c, this.y, 0,0);
        }

    }

    function animateHarpoon() {
        requestAnimationFrame(animateHarpoon);
        ctx.beginpath();
          ctx.fillStyle = "rgba(44, 133, 240)";
          ctx.fillRect(this.x, this.y, 20,20);
          ctx.stroke();

          this.y += 3.5; 
    }
 

 Harpoon.prototype.harpoonFire = function() {
     if (playerpositionX[i] === this.x){
         drawHarpoon();

     }

 }

 Harpoon.prototype.harpoonCollisionBall = function(){

 }

 

