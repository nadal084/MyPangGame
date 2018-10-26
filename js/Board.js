 function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
   
    this.score = 0;
}
Board.prototype.start = function() {
    AnimationLoop();
}
Board.prototype.gameOver = function(){
    console.log("game over");
} 

Board.prototype.drawBoard = function() {
    this.img.src = "imgs/background1.png";
    ctx.drawImage(this.img,0, 0, canvas.width, canvas.height);
    
}

Board.prototype.getDistance = function(x1, y1, x2, y2) {
    var xDistance = x2 -x1;
    var yDistanceY = y2 -y1;
    return Math.sqrt(Math.pow(xDistance, 2) +Math.pow(yDistanceY, 2));
}

Board.prototype.collisionBallplayer = function(){
    var distance = this.getDistance(player.x +player.width/2, player.y +player.height/2, balloon.x, balloon.y);
   // console.log("distancia entre pares " + distance)
    if( distance < balloon.radius + player.width/2){
        this.lives -=1;
        console.log("one live less lives");
        balloon.dy = -balloon.dy;
       if(this.lives <= 0){
           console.log("game over");
           this.gameOver();
       }
    }
}
 Board.prototype.addNewHarpoon = function(e) {
    if(e.keyCode === 96){
        var harpoon = new Harpoon(player.x, player.y)
        harpoons.push(harpoon);
    }
 }



  function AnimationLoop() {
    board.drawBoard();
    player.drawPlayer();
    board.collisionBallplayer();
    for(var i=0 ; i< harpoons.length; i++){
        harpoons[i].drawHarpoon();
        harpoons[i].updateHarpoon();
    }
    
   
    balloon.draw();
    balloon.updateBall();
   
   requestAnimationFrame(AnimationLoop);
    
}









  