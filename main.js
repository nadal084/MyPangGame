var canvas = document.getElementById("portrait");
canvas.width = window.innerWidth -10;
canvas.height = window.innerHeight -10;
var ctx = canvas.getContext("2d");


window.onload = function(e){
    console.log(e.keyCode);
    document.onkeydown = function(e) {
        if(e.keyCode === 13)
        startgame();
    }

document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:
      moveLeft();
      break;
      case 39:
      moveRight();
      break;
      case 96:
      harpoonFire();
    }
  }
        
        
        


    
    var board = new Board();
    var player = new Player();
    //var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);

    



    function AnimationLoop() {
         board.drawBoard();
         player.drawPlayer();
         player.moves();
         balloon.draw();
         balloon.updateBall();
        window.requestAnimationFrame(AnimationLoop);
    }

    AnimationLoop();

    
 
