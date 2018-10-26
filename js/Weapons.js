  function Harpoon(x ,y) {
     this.x = x;
     this.y = y;
     this.speed = 5;
     this.width = 15;
     this.height = 15;
 }
 
   Harpoon.prototype.drawHarpoon = function() {
          ctx.beginPath();
          ctx.fillStyle = "rgba(44, 133, 240)";
          ctx.fillRect(this.x, this.y, 20,20);
          ctx.stroke();
        
      }
    
    
    Harpoon.prototype.updateHarpoon = function(){
        this.y -= this.speed;
    }

 

