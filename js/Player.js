  var playerpositionX =[] ;


    function Player(x,y) {
    this.x = x;
    this.dx = 25;
    this.y = y; //canvas.height -80
    this.width = 50;
    this.height = 50;
    this.lives = 3;
    this.score = 0;
    this.image = new Image();
    };

    Player.prototype.drawPlayer = function() {
      this.image.src = "imgs/pangFire.png";
     // ctx.fillRect(this.x,this.y,this.width,this.height);

      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    };
    Player.prototype.drawLives = function() {
      ctx.font = " 13px 'Press Start 2P', Regular";  
      ctx.fillStyle = 'black';
      ctx.fillText('LIVES:'+ this.lives, 40,50);

    }
    Player.prototype.drawScores = function() {
      ctx.font = " 13px 'Press Start 2P', Regular";
      ctx.fillStyle = 'black';
      ctx.fillText('SCORE:' + this.score, innerWidth-180,50);

    }
   
     Player.prototype.movesLeft = function(e) {
      //console.log(e.keyCode);
      
      if( e.keyCode === 37){
        this.x -= this.dx;
      } 
      Player.prototype.movesRight = function(e) {
      if ( e.keyCode === 39){
        this.x += this.dx;
      }
    
   
        };
      }
   

    Player.prototype.updatePlayer = function() {
      if(this.x + this.width > canvas.width -50 || this.x - 50 < 0){
        console.log('colision')
        this.dx = -this.dx;
        
      }
    }
    

      
     
      