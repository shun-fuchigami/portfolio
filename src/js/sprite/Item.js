import * as PIXI from 'pixi.js';

class Item{
  constructor(texture,tileX,tileY){
    this.sprite = new PIXI.AnimatedSprite.fromImages();
    this.tileX = tileX;
    this.tileY = tileY;
  }
}

