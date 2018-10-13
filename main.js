window.onload = function() {
    var LEFT_KEY = 37;
    var RIGHT_KEY = 39;
    var ENTER = 13;
    var FIRE_KEY = 96;

    var player = new Player()
    

    player.drawPlayer()
    
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
      harpoonFire();
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
 