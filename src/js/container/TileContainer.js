import * as PIXI from 'pixi.js';
import { BaseContainer } from './BaseContainer';
import { app } from '../index.js';
import { TILE_WIDTH,TILE_HEIGHT } from '../config';
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

  /**
   * 指定した座標のタイルのxもしくはyのグローバル座標の値を取得
   * @param {*} tileX 
   * @param {*} tileY 
   * @param {*} type "x" or "y" 
   * @returns 
   */
  getTileGlobalPosition(tileX,tileY,type="x"){
    let tile = this.getTile(tileX,tileY);
    let x = tile.sprite.getGlobalPosition().x;
    let y = tile.sprite.getGlobalPosition().y;
    if(type === "x"){
      return x;
    }else if(type === "y"){
      return y;
    }else{
      return;
    }
  }

  /**
   * 各タイルに保持するグローバル座標をセット
   * 
   */
  setTileHitArea(){
    this.TILE_MAP.forEach(tile=>{
      
      let startX = tile.sprite.x - TILE_WIDTH / 2;
      let endX = tile.sprite.x + TILE_WIDTH / 2;

      let startY = tile.sprite.y - TILE_HEIGHT;
      let endY = tile.sprite.y;

      console.log(`${tile.tileX}:${tile.tileY} ->[${startX}~${endX}] [${startY}~${endY}]`)

      for(startX ; startX <= endX; startX++ ){
        tile.hitArea["x"].push(startX);
      }
      for(startY ; startY <= endY; startY++ ){
        tile.hitArea["y"].push(startY);
      }
    })
  }

  /**
   * 指定したx,yのローカル座標（タイルコンテナ内の座標）を引数に該当タイルを返す
   * @param {*} x 
   * @param {*} y 
   * @returns タイル 
   */
  getCurrentTile(x,y){
    let tile = this.TILE_MAP.find((tile)=>{
      return tile.hitArea["x"].includes(x) && tile.hitArea["y"].includes(y);
    })
    return tile;
  }

  /**
   * ヒーロの乗るタイルに対しフラグをセット
   * @param {*} hero 
   */
  checkOnHeroTile(hero){
    this.TILE_MAP.forEach(tile=>{
      tile.onHero = false;
      tile.sprite.tint = 0xffffff;
    })

    let tile = this.getCurrentTile(hero.sprite.x,hero.sprite.y);
    tile.onHero = true;
    tile.sprite.tint = 0x038C7F;
    hero.tileX = tile.tileX;
    hero.tileY = tile.tileY;
  }

  
}