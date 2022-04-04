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
    this.sprite.anchor.set(0.5,1);
    this.hitArea = {
      "x":[],
      "y":[],
    }
    this.onHero = false
  }

  initTile(){
    this.sprite.x = (this.tileX-this.tileY) * TILE_WIDTH /2;
    this.sprite.y = (this.tileX+this.tileY) * TILE_HEIGHT /2;
  }

  
}

