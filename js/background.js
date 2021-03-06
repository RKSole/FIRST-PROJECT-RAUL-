function Background(game) {
  this.x = 0;
  this.y = 0;
  this.game = game;


  this.img = new Image();
  this.img.src = "images/bk.jpg";
  this.imgeGrid = new Image();
  this.imgeGrid.src = "images/Brick_Block.png";
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.game.canvas.width,
    this.game.canvas.height
  );
};

Background.prototype.drawBorder = function() {
  var w = this.game.canvas.width;
  var h = this.game.canvas.height;

  for (y = 0; y <= h; y += 40) {
    this.game.ctx.drawImage(this.imgeGrid, 0, y, 40, 40);
  }
  for (z = 0; z <= h; z += 40) {
    this.game.ctx.drawImage(
      this.imgeGrid,
      this.game.canvas.width - 40,
      z,
      40,
      40
    );
  }
  for (r = 0; r <= w; r += 40) {
    this.game.ctx.drawImage(this.imgeGrid, r, 0, 40, 40);
  }
  for (r = 0; r <= w; r += 40) {
    this.game.ctx.drawImage(
      this.imgeGrid,
      r,
      this.game.canvas.height - 40,
      40,
      40
    );
  }
};
