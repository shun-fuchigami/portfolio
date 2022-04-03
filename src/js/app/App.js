import * as PIXI from 'pixi.js';

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
      width:1440,
      height:900,
    });
    document.body.appendChild(app.view);
    return app;
  }

}