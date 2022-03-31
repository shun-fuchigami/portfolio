import * as PIXI from 'pixi.js';
/**
 * ローダークラス
 * 画像の読み込みを行う
 */
export class Loaderimg{
  /**
   * @returns 読み込んだタイルスプライトの配列を返す
   */
  static tileLoad = (index) => {
    return new PIXI.Sprite.from(`./imgs/tile-${index}.png`);
  }
}



