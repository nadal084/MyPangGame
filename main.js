var canvas = document.getElementById("portrait");
canvas.width = window.innerWidth -10;
canvas.height = window.innerHeight -10;
var ctx = canvas.getContext("2d");
var player;
var board;
var scores;
var balloon;
var harpoons=[];


window.onload = function(e){
   
   
     board = new Board();
     player = new Player(canvas.width/2, canvas.height-80);
     console.log(player.lives);
     

    function randomWidth() { // para pintar la instancia en un punto al azar en el eje x.
        return Math.floor((Math.random()*800)+1)
    }
    balloon = new Balloon(randomWidth(), 175, 35, 3, 4.5);
    console.log(balloon.x);

    

    document.onkeydown = function(e) {
        console.log(e.keyCode);
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
        board.addNewHarpoon(e);
        }
    }
    board.start();
    };
  

    
 
