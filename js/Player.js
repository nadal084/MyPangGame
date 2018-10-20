  var playerpositionX =[] ;


    function Player(x,y) {
    this.x = x;
    this.dx = 10;
    this.y = y; //canvas.height -80
    this.width = 50;
    this.height = 50;
    this.lives = 3;
    this.image = new Image();
    };

    Player.prototype.drawPlayer = function() {
      this.image.src = "imgs/pangFire.png";
     // ctx.fillRect(this.x,this.y,this.width,this.height);

      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    };

    Player.prototype.movesLeft = function(e) {
      console.log(e.keyCode);
      
      if( e.keyCode === 37){
        this.x -= this.dx;
        console.log(this.x + " , " + this.y);
      }
      //this.x = Math.min((0) + this.width , Math.max(canvas.width )-this.width);
      //this.y = Math.min((0) + this.height, Math.max(canvas.height )-this.height);
    }

      Player.prototype.movesRight = function(e) {
      if ( e.keyCode === 39){
        this.x += this.dx;
      }
    
    //this.x = Math.min((0) + this.width , Math.max(canvas.width )-this.width);
    //this.y = Math.min((0) + this.height, Math.max(canvas.height )-this.height);
  };

    Player.prototype.updatePlayer = function() {
      if(this.x + this.width > canvas.width || this.x - 50 < 0){
        this.dx = -this.dx;
        
      }else{
       
      }
     
      
      this.drawPlayer();
    }

