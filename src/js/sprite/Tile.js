import * as PIXI from 'pixi.js';
import { LoaderImg } from '../loader/LoaderImg.js';
import { 
  TILE_IMG_MAP,
  TILE_WIDTH,
  TILE_HEIGHT,
  } from '../config.js' 

export class Tile{

  /**
   * コンストラクタ
   * @param {number} tileX TILE_MAPのX座標
   * @param {number} tileY TILE_MAPのY座標
   */
  constructor(tileX,tileY){
    this.tileX = tileX;
    this.tileY = tileY;
    
    this.sprite = LoaderImg.tileLoad(TILE_IMG_MAP[tileX][tileY]);
    this.sprite.x = (this.tileX-this.tileY) * TILE_WIDTH  / 2;
    this.sprite.y = (this.tileX+this.tileY) * TILE_HEIGHT / 2;

    this.sprite.anchor.set(0.5,1);
    this.sprite.interactive = true;
    
    this.Hero;
    this.onHero = false;
    this.Icon;
    this.onIcon = false;

    this.cornerTop = {
        "x":this.sprite.x,
        "y":this.sprite.y - TILE_HEIGHT * 2
      };
    this.cornerBottom = {
        "x":this.sprite.x,
        "y":this.sprite.y - TILE_HEIGHT * 1
      };
    this.cornerRight = {
        "x":this.sprite.x + TILE_WIDTH / 2,
        "y":this.sprite.y - TILE_HEIGHT * 1.5
      };
    this.cornerLeft = {
        "x":this.sprite.x - TILE_WIDTH / 2 ,
        "y":this.sprite.y - TILE_HEIGHT * 1.5
      };
    
    this.polygon = this.createPolygon();  
    this.lineSprite = this.createLineSprite();
    this.sprite.hitArea = this.polygon;
  }

  getHitAreaContains(object){
    return this.sprite.hitArea.contains(object.point.x , object.point.y);
  }

  createLineSprite(){
    let rect = new PIXI.Graphics();
    rect.lineStyle(3,0xF25260,0.5,1);
    rect.drawPolygon(this.polygon);
    rect.visible = false;
    return rect;
  }

  createPolygon(){
    let polygon = new PIXI.Polygon(
      new PIXI.Point(this.cornerTop.x , this.cornerTop.y),
      new PIXI.Point(this.cornerLeft.x , this.cornerLeft.y),
      new PIXI.Point(this.cornerBottom.x , this.cornerBottom.y),
      new PIXI.Point(this.cornerRight.x , this.cornerRight.y),
    );
    return polygon;
  }
  
  setVisibleLine(boolean = true){
    this.lineSprite.visible = boolean;
  }

}

