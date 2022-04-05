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

  }

  initPosition(){
    this.container.x = app.screen.width/2;
    this.container.y = app.screen.height/4;
  }

  /**
   * タイルスプライトをTILE_MAPへ格納
   * @param {Tile} 
   */
  pushTileMap(tile){
    this.TILE_MAP.push(tile);
  }

  /**
   * @param {number } tileX 
   * @param {number} tileY 
   * @returns 座標に応じたタイルクラスを返す
   */
  getTile(tileX,tileY){
    let tile = this.TILE_MAP.find( tile => {
      return tile.tileX === tileX && tile.tileY === tileY;
    })
    return tile;
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
   * 指定した座標のタイルのxもしくはyのローカル座標を返す
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
   * ヒーロの乗るタイルに対しフラグをセット
   * @param {*} hero 
   */
   setOnHeroTile(hero){
    this.TILE_MAP.forEach(tile=>{
      tile.onHero = false;
      if(tile.getHitAreaContains(hero) === false){
        return;
      }
      tile.onHero = true;
      hero.tileX = tile.tileX;
      hero.tileY = tile.tileY;
    })
  }

  /**
   * アイコンの乗るタイルに対しフラグをセット
   * @param {*} icon 
   */
   setOnIconTile(icon){
    this.TILE_MAP.forEach(tile=>{
      tile.onIcon = false;
      if(tile.getHitAreaContains(icon) === false){
        return;
      }
      tile.onIcon = true;
      tile.Icon = icon;
    })
  }

  /**
   * タイルスプライトに被せるヒットエリア用のポリゴンの生成・返却
   * @returns PIXI.Polygon
   */
  createPolygon(){
    let polygon = new PIXI.Polygon(
      new PIXI.Point(this.getTile(0,0).cornerTop.x , this.getTile(0,0).cornerTop.y),
      new PIXI.Point(this.getTile(9,0).cornerRight.x , this.getTile(9,0).cornerRight.y),
      new PIXI.Point(this.getTile(9,9).cornerBottom.x , this.getTile(9,9).cornerBottom.y),
      new PIXI.Point(this.getTile(0,9).cornerLeft.x , this.getTile(0,9).cornerLeft.y),
    );
    return polygon;
  }


  highLightTile(tileX,tileY){
    this.TILE_MAP.forEach(tile=>{
      if(tile.tileX === tileX && tile.tileY === tileY){
        tile.setVisibleLine(true);
      } else {
        tile.setVisibleLine(false);
      }
    })
  }

}