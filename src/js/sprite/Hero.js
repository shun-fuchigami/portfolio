import * as PIXI from 'pixi.js';
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
          this.sprite.x += 2;
          this.sprite.y -= 1;
          break;
        case "ArrowDown":
          this.sprite.x -= 2;
          this.sprite.y += 1;
          break;
        case "ArrowRight":
          this.sprite.x += 2;
          this.sprite.y += 1;
          break;
        case "ArrowLeft":
          this.sprite.x -= 2;
          this.sprite.y -= 1;
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
}



