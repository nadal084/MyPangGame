var playerArray = [];
var playerposition ;

    function Player() {
    this.x = window.innerWidth / 2;
    this.dx = 5;
    this.y = 0;
    this.width = 35;
    this.height = 35;
    this.lives = 3;
    this.image = new Image();
    };

    Player.prototype.drawPlayer = function() {
      this.image.src = "imgs/pangFire.png";
     // ctx.fillRect(this.x,this.y,this.width,this.height);

      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    };

    Player.prototype.moves = function(e) {
      console.log(e.keyCode);
      if( e.keyCode === 37){
        this.x -= this.dx;
      }
      if ( e.keyCode === 39){
        this.x += this.dx;
      }
      this.x = Math.min((0) + this.width , Math.max(canvas.width )-this.width);
      this.y = Math.min((0) + this.height, Math.max(canvas.height )-this.height);
    };
    
     Player.prototype.CollisionBallPlayer = function(){}

     
     
    
     function animate(){

     }

