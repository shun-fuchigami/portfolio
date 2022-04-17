import * as PIXI from 'pixi.js';
/**
 * ローダークラス
 * 画像の読み込みを行う
 */
export class LoaderImg{
  /**
   * @returns 生成したタイルスプライト
   */
  static tileLoad = (index) => {
    return new PIXI.Sprite.from(`./imgs/tiles/tile-${index}.png`);
  }
 
  
  static heroTexturesLoad = () => {
    let heroImgs = {
      "ArrowUp":[],
      "ArrowDown":[],
      "ArrowRight":[],
      "ArrowLeft":[],
    };
    let heroTextures = {
      "ArrowUp":[],
      "ArrowDown":[],
      "ArrowRight":[],
      "ArrowLeft":[],
    };

    for(let i=0; i < 4; i++){
      heroImgs.ArrowUp.push(`./imgs/heros/hero-right-up-${i}.png`);
      heroImgs.ArrowDown.push(`./imgs/heros/hero-left-down-${i}.png`);
      heroImgs.ArrowRight.push(`./imgs/heros/hero-right-down-${i}.png`);
      heroImgs.ArrowLeft.push(`./imgs/heros/hero-left-up-${i}.png`);
    }

    heroImgs.ArrowUp.forEach((heroImg)=>{
      let up = PIXI.Texture.from(heroImg);
      heroTextures.ArrowUp.push(up);
    });

    heroImgs.ArrowDown.forEach((heroImg)=>{
      let down = PIXI.Texture.from(heroImg);
      heroTextures.ArrowDown.push(down);
    });

    heroImgs.ArrowRight.forEach((heroImg)=>{
      let right = PIXI.Texture.from(heroImg);
      heroTextures.ArrowRight.push(right);
    });

    heroImgs.ArrowLeft.forEach((heroImg)=>{
      let left = PIXI.Texture.from(heroImg);
      heroTextures.ArrowLeft.push(left);
    });
    
    return heroTextures;  
  }

  static controllerLoad(name){
    return new PIXI.Sprite.from(`./imgs/buttons/button-${name}.png`);
  }
  
  static iconLoad(name){
    let iconTextures = [];
    for(let i = 0; i < 7; i++ ){
      iconTextures.push(new PIXI.Texture.from(`./imgs/icons/${name}/icon-${i}.png`));
    }

    return iconTextures;
  }
}
