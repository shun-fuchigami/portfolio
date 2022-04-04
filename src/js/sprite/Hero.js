import * as PIXI from 'pixi.js';
import { TILE_HEIGHT, TILE_WIDTH } from '../config.js';
import { LoaderImg } from '../loader/LoaderImg.js';

/**
 * プレイヤーが操作する主人公
 */
export class Hero{
  /**
   * コンストラクター
   * 初期位置のタイルを引数に生成
   * @param {*} tileX 
   * @param {*} tileY 
   */
  constructor(tileX,tileY){
    this.textures = LoaderImg.heroTexturesLoad();
    this.tileX = tileX;
    this.tileY = tileY;
    this.speed = 2;
    this.sprite = new PIXI.AnimatedSprite(this.textures["ArrowDown"]);
    this.sprite.anchor.set(0.5,1);
    this.sprite.interactive = true;
    this.sprite.animationSpeed = 0.17

  }

  /**
   * フレームを初期化
   */
  initSpriteFrame(){
    this.sprite.texture = this.sprite.textures[0];
  }

  /**
   * ヒーロースプライトで利用するテクスチャをセット
   * "up","down","right","left"
   * @param {string} direction 
   */
  setDirection(direction="ArrowDown"){
    this.sprite.textures = this.textures[direction]
    this.sprite.texture = this.textures[direction][0];
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

  getPosition(type="x"){
    if(type==="x"){
      return this.sprite.x
    } else{
      return this.sprite.y;
    }
  }

  /**
   * 進行方向のx,y座標を取得
   * タイル端の移動のため、取得範囲を微調整
   * @param {*} direction 
   * @returns 
   */
  getNextFramePosition(direction){
    let x = 0;
    let y = 0;
    switch(direction){
      case "ArrowUp":
        x = this.sprite.x + TILE_WIDTH/2;
        y = this.sprite.y - TILE_HEIGHT/2;
        break;
      case "ArrowDown":
        x = this.sprite.x - 8;
        y = this.sprite.y + 4;
        break;
      case "ArrowRight":
        x = this.sprite.x + 8;
        y = this.sprite.y + 4;
        break;
      case "ArrowLeft":
        x = this.sprite.x - TILE_WIDTH/2;
        y = this.sprite.y - TILE_HEIGHT/2;
        break;
      default:
        break;
      }
      return {x:x,y:y};
    }
    

  }


