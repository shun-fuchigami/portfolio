import * as PIXI from 'pixi.js';
import { DEF_HEIGHT, viewWidth } from '../config';

/**
 * Appクラス
 * PIXIキャンバスを生成
 */
export class App{
  static createApp = () => {

    const app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0xf2f2f2,
      width:viewWidth(),
      height:DEF_HEIGHT,
    });
    document.body.appendChild(app.view);
    return app;
  }

  static 

}