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

    document.onkeydown = function(e) {
        console.log(e);
        switch(e.keyCode) {
        case 37:
        player.movesLeft(e);
        break;
        case 39:
        player.movesRight(e);
        break;
        case 96:
        harpoonFire(e);
        }
    }
            
        
        


    
    //var board = new Board();
    //var player = new Player();
    //var harpoon = new Harpoon();
    //var balloon = new Balloon(Math.random()*this.width, 175, 30, 3, 4.5);

    



    function AnimationLoop() {
         board.drawBoard();
         player.drawPlayer();
        // balloon.draw();
        // balloon.updateBall();
        // harpoon.drawharpoon();
         window.requestAnimationFrame(AnimationLoop);
         
    }
    window.requestAnimationFrame(AnimationLoop);
        //AnimationLoop();
};

    
 
