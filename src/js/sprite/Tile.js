import * as PIXI from 'pixi.js';
import { LoaderImg } from '../loader/LoaderImg.js';
import { 
  TILE_IMG_MAP,
  TILE_WIDTH,
  TILE_HEIGHT,
  TILE_START_Y,
  } from '../config.js' 
  import {app} from '../index.js';

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
  }

  initTile(){
    this.sprite.x = (this.tileX-this.tileY) * TILE_WIDTH /2;
    this.sprite.y = app.screen.height/4 + (this.tileX+this.tileY) * TILE_HEIGHT /2;
  }
}

