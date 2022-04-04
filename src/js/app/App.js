import * as PIXI from 'pixi.js';
import { DEF_HEIGHT, DEF_WIDTH } from '../config';

/**
 * Appクラス
 * PIXIキャンバスを生成
 */
export class App{
  static createApp = () => {

    const app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0xF2E0DC,
      width:window.innerWidth,
      height:window.innerHeight,
    });
    document.body.appendChild(app.view);
    return app;
  }

  static 

}