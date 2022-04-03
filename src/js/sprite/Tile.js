import * as PIXI from 'pixi.js';
import { LoaderImg } from '../loader/LoaderImg.js';
import { 
  TILE_IMG_MAP,
  TILE_WIDTH,
  TILE_HEIGHT,
  TILE_START_Y,
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
    this.sprite = this.createTile(tileX,tileY);
  }

  /**
   * タイルスプライトを生成
   * @param {*} tileX TILE_MAPのX座標
   * @param {*} tileY TILE_MAPのY座標
   */
  createTile(tileX,tileY){
      let tile = LoaderImg.tileLoad(TILE_IMG_MAP[tileX][tileY]);
      tile.x = (tileX-tileY) * TILE_WIDTH /2;
      tile.y = TILE_START_Y  + (tileX+tileY) * TILE_HEIGHT /2;
      tile.anchor.set(0.5,1);
      return tile;
  }
}

