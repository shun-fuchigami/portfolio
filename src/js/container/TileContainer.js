import * as PIXI from 'pixi.js';
import { BaseContainer } from './BaseContainer';
import { app } from '../index.js';
import { TILE_WIDTH,TILE_HEIGHT, DEF_HEIGHT } from '../config';

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
    this.HERO_MAP = [];

    /**
     * ヒーロー・アイテムスプライトを保持する配列
     */
    this.ICON_MAP = [];

  }

  /**
   * タイルコンテナ位置の初期化
   */
  initPosition(){
    this.container.x = app.screen.width/2;
    this.container.y = DEF_HEIGHT / 5;
  }

  /**
   * タイルスプライトをTILE_MAPへ格納
   * @param {Tile} 
   */
  pushTileMap(tile){
    this.TILE_MAP.push(tile);
  }

  /**
   * @param {number} tileX 
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
   * 指定した座標のタイルのxもしくはyのローカル座標を返す
   * @param {number} tileX 
   * @param {number} tileY 
   * @param {string} type "x" or "y" 
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
   * @param {number} tileX 
   * @param {number} tileY 
   * @param {string} type "x" or "y" 
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
   * ヒーローの乗るタイルに対しフラグをセット
   * ヒーローの向く方向に応じてヒーローに選択中のタイルをセット
   * @param {Hero} hero 
   */
   setOnHeroTile(hero){

    this.TILE_MAP.forEach(tile=>{
      tile.onHero = false;
      if(!tile.getHitAreaContains(hero)){
        return;
      }
      tile.onHero = true;
      hero.setOnTile(tile);
    });

    this.TILE_MAP.forEach(tile=>{
      if(hero.getNextTile().x === tile.tileX &&
        hero.getNextTile().y === tile.tileY ){

          hero.setSelectTile(tile);

      } else {
        return;
      }
    });
   }

  /**
   * アイコンの乗るタイルに対しフラグをセット
   * @param {Icon} icon 
   */
   setOnIconTile(icon){
    this.TILE_MAP.forEach(tile=>{
      if(tile.getHitAreaContains(icon)){
        tile.onIcon = true;
        tile.icon = icon;
      }
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

  /**
   * 引数で指定したタイルのラインの表示/非表示を行う
   * @param {number} tileX 
   * @param {number} tileY 
   */
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