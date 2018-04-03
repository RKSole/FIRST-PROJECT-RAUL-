function Background(game) {
  
  this.x = 0;
  this.y = 0;
  this.game = game;

  this.dx = 10;

  this.img = new Image();
  this.img.src = "images/bk.jpg";
  this.imgGrid = new Image();
  this.imgGrid.src = "images/vLLgDyu.png";
  this.imgeGrid = new Image();
  this.imgeGrid.src = "images/Brick_Block.png";
  this.sandBlocks = [];
  this.createSand();

}


Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);

  this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);

};

Background.prototype.move = function() {
  this.x -= this.dx;

  if (this.x < -this.game.canvas.width) this.x = 0;
};


Background.prototype.createSand = function(){
  var w = this.game.canvas.width;
  var h = this.game.canvas.height;

  for (x=40;x<=w-40;x+=40) {
      for (y=40;y<=h-40;y+=40) {
        this.sandBlocks.push({"x":x,"y":y});
      }
  }
  };


Background.prototype.drawGrid = function() {
  for (i=0;i<this.sandBlocks.length;i++){
    this.game.ctx.drawImage(this.imgGrid,this.sandBlocks[i].x,this.sandBlocks[i].y,40,40)
  }
      };

Background.prototype.drawBorder = function(){
  var w = this.game.canvas.width;
  var h = this.game.canvas.height;

  for (y=0;y<=h;y+=40){
    this.game.ctx.drawImage(this.imgeGrid,0,y,40,40);
  }
  for (z=0;z<=h;z+=40){
    this.game.ctx.drawImage(this.imgeGrid,this.game.canvas.width-40,z,40,40);
  }
  for (r=0;r<=w;r+=40){
    this.game.ctx.drawImage(this.imgeGrid,r,0,40,40);
  }
  for (r=0;r<=w;r+=40){
    this.game.ctx.drawImage(this.imgeGrid,r,this.game.canvas.height-40,40,40);
  }
  
}

  
// Background.prorotype.isCollision = function() {
//   var player = this.game.player;
//   for (i=0; i < this.listObstacles.length; i++){
//     if (
//       player.x < this.listObstacles[i][0] + this.listObstacles[i][2] && 
//       player.x + player.img.width > this.listObstacles[i][0] && 
//       player.y < this.listObstacles[i][1] + this.listObstacles[i][3] && 
//       player.y + player.img.width > this.listObstacles[i][1]
      
//     ) {
//     return true;

//     } 
//   } 
// }