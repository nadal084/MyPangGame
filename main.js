window.onload = function() {
    var LEFT_KEY = 37;
    var RIGHT_KEY = 39;
    var ENTER = 13;
    var FIRE_KEY = 96;

    
    var board = new Board();
    var player = new Player();
    var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);

    



    function AnimationLoop() {
         board.drawBoard();
         player.drawPlayer();
         player.moves();
         balloon.draw();
         requestAnimationFrame(AnimationLoop);
    }

    AnimationLoop();

    
 document.body.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        startGame();
    };
 })    


document.body.addEventListener('keydown', function(e){
    if(e.keyCode === 39|| e.keyCode ===37){
     player.moves(e); 
     
    }
    if(e.keyCode === 96){
      harpoonFire(e);
    }
});

var keysPressed = {
    left: false,
    right: false,
    fire: false,
  };
  
  document.body.addEventListener('keydown', function(event){
    switch (event.keyCode) {
      case LEFT_KEY:
        keysPressed.right = true;
        break;
      case RIGHT_KEY:
        keysPressed.left = true;
        break;
      case FIRE_KEY:
        keysPressed.fire = true;
        break;
    }
})
}



   /*  window.onkeyup = function(event) {
        switch( event.keyCode) {
            case LEFT_KEY:
            keysPressed.right = false;
            break;
            case RIGHT_KEY:
            keysPressed.left = false;
            break;
            case FIRE_KEY:
            keysPressed.fire = false;
        }
    } */
 
