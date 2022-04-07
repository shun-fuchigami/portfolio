import * as PIXI from 'pixi.js';
import { TILE_HEIGHT, TILE_WIDTH } from '../config.js';
import { LoaderImg } from '../loader/LoaderImg.js';

/**
 * プレイヤーが操作する主人公
 */
export class Hero{
  /**
   * コンストラクター
   */
  constructor(){
    this.textures = LoaderImg.heroTexturesLoad();
    this.tileX = 0;
    this.tileY = 0;
    // this.speed = 4;
    this.speed = 8;
    this.backSpeed = TILE_HEIGHT;
    this.direction = "ArrowDown";
    this.sprite = new PIXI.AnimatedSprite(this.textures["ArrowDown"]);
    this.sprite.anchor.set(0.5,1);
    this.sprite.interactive = true;
    this.sprite.animationSpeed = 0.17
    this.point = new PIXI.Point();
    this.onTile;
    this.selectTile;
  }

  /**
   * フレームを初期化
   */
  initSpriteFrame(){
    this.sprite.texture = this.sprite.textures[0];
  }

  initPoint(){
    this.point.set(this.sprite.x,this.sprite.y - TILE_HEIGHT *1.5);
  }

  /**
   * ヒーロースプライトで利用するテクスチャをセット
   * "up","down","right","left"
   * @param {string} direction 
   */
  setDirection(direction="ArrowDown"){
    this.sprite.textures = this.textures[direction]
    this.sprite.texture = this.textures[direction][0];
    this.direction = direction;
  }

  /**
   * 引数に渡された方向へヒーロースプライトを移動する
   * @param {*} direction 
   */
  move(direction){
      switch(direction){
        case "ArrowUp":
          this.sprite.x += this.speed;
          this.sprite.y -= this.speed/2;
          break;
        case "ArrowDown":
          this.sprite.x -= this.speed;
          this.sprite.y += this.speed/2;
          break;
        case "ArrowRight":
          this.sprite.x += this.speed;
          this.sprite.y += this.speed/2;
          break;
        case "ArrowLeft":
          this.sprite.x -= this.speed;
          this.sprite.y -= this.speed/2;
          break;
        default:
          break;
        }
      }

      /**
   * 引数に渡された方向と逆方向へヒーロースプライトを移動する
   * @param {*} direction 
   */
  moveReset(direction){
    switch(direction){
      case "ArrowUp":
        this.sprite.x -= this.backSpeed;
        this.sprite.y += this.backSpeed / 2;
        break;
      case "ArrowDown":
        this.sprite.x += this.backSpeed;
        this.sprite.y -= this.backSpeed / 2;
        break;
      case "ArrowRight":
        this.sprite.x -= this.backSpeed;
        this.sprite.y -= this.backSpeed / 2;
        break;
      case "ArrowLeft":
        this.sprite.x += this.backSpeed;
        this.sprite.y += this.backSpeed / 2;
        break;
      default:
        break;
      }
    }

  /**
   * xもしくはyのローカル座標を返す
   * @param {*} type 
   * @returns 
   */
  getPosition(type="x"){
    if(type==="x"){
      return this.sprite.x
    } else{
      return this.sprite.y;
    }
  }

  /**
   * ヒーロースプライトの向く方向の次のタイルの座標を返す
   * @returns {x:number,y:number}
   */
  getNextTile(){
    let nextTileX;
    let nextTileY;
    switch(this.direction){
      case "ArrowUp":
        nextTileX = this.tileX;
        nextTileY = this.tileY - 1;
        break;
      case "ArrowDown":
        nextTileX = this.tileX;
        nextTileY = this.tileY + 1;
        break;
      case "ArrowRight":
        nextTileX = this.tileX + 1;
        nextTileY = this.tileY;
        break;
      case "ArrowLeft":
        nextTileX = this.tileX - 1;
        nextTileY = this.tileY;
        break;
      default:
        break;
      }
      return {x:nextTileX,y:nextTileY}
    }

  /**
   * 引数に渡したタイルをヒーローに保持する
   * @param {Tile} tile 
   */
  setOnTile(tile){
    this.onTile = tile;
    this.tileX = tile.tileX;
    this.tileY = tile.tileY;
  }

  /**
   * 引数に渡したタイル（選択状態のタイル）をヒーロに保持する
   * @param {Tile} tile 
   */
  setSelectTile(tile){
    this.selectTile = tile;
  }
}


