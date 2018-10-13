function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
   
    this.score = 0;
}

Board.prototype.drawBoard = function() {
    this.img.src = "imgs/background1.png";
    ctx.drawImage(this.img, this.width, this.height);
    
}