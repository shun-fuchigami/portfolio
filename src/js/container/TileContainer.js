import * as PIXI from 'pixi.js';
import { BaseContainer } from './BaseContainer';
import { app } from '../index.js';
/**
 * ヒーロー・タイル・アイテムを管理するコンテナクラス
 */
export class TileContainer extends BaseContainer{

  /**
   * コンストラクター
   */
  constructor(){
    
    super();
    this.initPosition();
    /**
     * タイルスプライトを保持する配列
     */
    this.TILE_MAP = [];
  
    /**
     * ヒーロー・アイテムスプライトを保持する配列
     */
    this.OBJECT_MAP = [];

    /**
     * ヒーロー・アイテムスプライトの座標有無を管理する配列
     * 0 => なし, 1 => あり 
     */
    this.OBJECT_USED_MAP = [
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,],
    ];
  }

  initPosition(){
    this.container.x = app.screen.width/2;
    this.container.y = app.screen.height/4;
  }
  /**
   * タイルスプライトを配置
   * @param {Tile} 
   */
  setTile(tile){
    this.TILE_MAP.push(tile);
  }

  /**
   * @param {number } tileX 
   * @param {number} tileY 
   * @returns 座標に応じたタイルスプライトを返す
   */
  getTile(tileX,tileY){
    let tile = this.TILE_MAP.find( tile => {
      return tile.tileX === tileX && tile.tileY === tileY;
    })
    return tile;
  }

  /**
   * 指定した座標のタイルのxもしくはyの値を取得
   * @param {*} tileX 
   * @param {*} tileY 
   * @param {*} type "x" or "y" 
   * @returns 
   */
  getTilePosition(tileX,tileY,type="x"){
    let tile = this.getTile(tileX,tileY);
    let x = tile.sprite.x;
    let y = tile.sprite.y;
    if(type === "x"){
      return x;
    }else if(type === "y"){
      return y;
    }else{
      return;
    }
  }


  setObjectUserMap(tileX,tileY){
    if(!this.OBJECT_USED_MAP[tileX][tileY]){
      this.OBJECT_USED_MAP[tileX][tileY] = 1;
    }else{
      return
    }
  }

}