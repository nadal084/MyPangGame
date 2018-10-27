var canvas = document.getElementById("portrait");
canvas.width = window.innerWidth -10;
canvas.height = window.innerHeight -10;
var ctx = canvas.getContext("2d");
var loop;
var player;
var board;
var balloons=[];
var harpoons=[];
var gameStart = false;

window.onload = function(e){
    /*console.log(e.keyCode);
    document.body.AddEventlistener = function("keydown",function(e)) {
        if(e.keyCode === 13&& !gameStart){
         startGame();
        }
        
    }*/
    
    board = new Board();
    player = new Player(canvas.width/2, canvas.height-80);
     
     

    function randomWidth() { // metodo para pintar la instancia en un punto al azar en el eje x.
        return Math.floor((Math.random()*800)+1)
    }
    balloons = [new Balloon(randomWidth(), 175, 35, 3, 4.5)];
    console.log(balloon.x);

    
    /*function reset(){
       // player.restartGame();
    }*/

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
    function startGame(){
     gameStart = true;
     ctx.

    }
  

    
 
