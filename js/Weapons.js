  function Harpoon(x ,y) {
     this.x = x;
     this.y = y;
     this.speed = 5;
     this.width = 10;
     this.height = 10;
 }
 
   Harpoon.prototype.drawHarpoon = function() {
          ctx.beginPath();
          ctx.fillStyle = "rgba(44, 133, 240)";
          ctx.fillRect(this.x, this.y, 5,15);
          ctx.stroke();
        
      }
    
    
    Harpoon.prototype.updateHarpoon = function(){
        this.y -= this.speed;
    }
   

