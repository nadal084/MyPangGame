var canvas = document.getElementById("portrait");
canvas.width = window.innerWidth -10;
canvas.height = window.innerHeight -10;
var ctx = canvas.getContext("2d");


window.onload = function(e){
    /*console.log(e.keyCode);
    document.onkeydown = function(e) {
        if(e.keyCode === 13)
        startgame();
    }*/

    var board = new Board();
    var player = new Player(canvas.width/2, canvas.height-80);
    console.log(player.lives);
    //var harpoon = new Harpoon();

    function randomWidth() {
        return Math.floor((Math.random()*800)+1)
    }
    var balloon = new Balloon(randomWidth(), 175, 35, 3, 4.5);
    console.log(balloon.x);


    document.onkeydown = function(e) {

        switch(e.keyCode) {
        case 37:
        player.movesLeft(e);
        player.updatePlayer(e);
        break;
        case 39:
        player.movesRight(e);
        player.updatePlayer(e);
        break;
        case 96:
        harpoonFire(e);
        }
    }
    
            
        
        


    
    //var board = new Board();
    //var player = new Player();
    //var harpoon = new Harpoon();
    //var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);

    function hitbyBalloon() {
        var touchplayerX = player.x + player.width ;
        var touchplayerY = player.y + player.height ;
        var touchplayer = touchplayerX + touchplayerY
        console.log((touchplayerX + '  '+touchplayerY));
        var balloonTouchplayer = (balloon.x + balloon.radius && balloon.y + balloon.radius);
        if( player.y  == balloon.y){
          player.lives -=1;
          console.log(player.lives);
        }
        if(player.lives == 0){
            //console.log('run out of lives');
            //alert('run out of lives')
       /* this.ctx.font = '20px Press+Start+2P';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Game Over fella, your Score is : ' + points, 100, 300);*/
  
  
        }
      }



    function AnimationLoop() {
         board.drawBoard();
         player.drawPlayer();
         
        // player.updatePlayer();
        //console.log(balloon)
        //console.log(balloon.x == player.x)
        balloon.draw();
        balloon.updateBall();
        hitbyBalloon();
       // console.log(balloon.x);
        
        // harpoon.drawharpoon();
        requestAnimationFrame(AnimationLoop);
         
    }
    requestAnimationFrame(AnimationLoop);
        //AnimationLoop();
};

    
 
