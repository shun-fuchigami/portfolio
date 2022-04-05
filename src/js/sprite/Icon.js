import * as PIXI from 'pixi.js';
import { LoaderImg } from "../loader/LoaderImg";
import { TILE_HEIGHT, TILE_WIDTH } from '../config.js';


export class Icon{
  constructor(name){
    this.textures = LoaderImg.iconLoad(name);
    this.tileX = 0;
    this.tileY = 0;
    this.sprite = new PIXI.AnimatedSprite(this.textures);
    this.sprite.anchor.set(0.5,1);
    this.sprite.interactive = true;
    this.sprite.animationSpeed = 0.2
    this.point = new PIXI.Point();
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
}