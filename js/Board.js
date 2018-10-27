 function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.previewImage.src = "imgs/pang_1.png";
    this.imgGameover = new Image();
    this.imgGameover.src = "imgs/gameOver.png";
   }
Board.prototype.start = function() {
     AnimationLoop();
};

Board.prototype.drawBoard = function() {
    this.img.src = "imgs/background1.png";
    ctx.drawImage(this.img,0, 0, canvas.width, canvas.height);
    
}
Board.prototype.clear = function (){
    cancelAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.imgGameover,0, 0, canvas.width, canvas.height);
    ;
}

Board.prototype.gameOver = function(){
    this.clear();
    //this.finishview();
}

Board.prototype.getDistance = function(x1, y1, x2, y2) {
    var xDistance = x2 -x1;
    var yDistanceY = y2 -y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistanceY, 2));
}

Board.prototype.collisionBallplayer = function(){
    var distance = this.getDistance(player.x + player.width/2, player.y + player.height/2, balloon.x, balloon.y);
   // console.log("distancia entre pares " + distance)
    if( distance < balloon.radius + player.height/2){
        player.lives -=1;
        console.log("one live less lives");
        balloon.dy = -balloon.dy;
       if(player.lives <= 0){
           console.log("game over");
           board.gameOver();
           return true;
       }
    }
}
 Board.prototype.addNewHarpoon = function(e) {
    if(e.keyCode === 96){
        var harpoon = new Harpoon(player.x, player.y)
        harpoons.push(harpoon);
    }
 }
 Board.prototype.collisionHarpoonBall = function(harpoon){

     var distance = this.getDistance(harpoon.x + harpoon.width/2, harpoon.y - harpoon.height/2, balloon.x, balloon.y);
     if( distance <  balloon.radius + harpoon.height/2){
         console.log("collision harpoonBall");
         player.score += 200;
         console.log("you just hit on target");
     }
 }
 

   function AnimationLoop() {
    board.drawBoard();
    player.drawPlayer();
    player.drawLives();
    player.drawScores();
    if(board.collisionBallplayer()) return;
    
    
    for(var i=0 ; i< harpoons.length; i++){
        board.collisionHarpoonBall(harpoons[i]);
        harpoons[i].drawHarpoon();
        harpoons[i].updateHarpoon();
       
     }
        
    
   
     //for(var i=0 ; i< balloons.length; i++){
        // balls[i].balloons.draw
     
   
    //
    balloon.draw();
    balloon.updateBall();
    
   
   loop=requestAnimationFrame(AnimationLoop);
    
}









  