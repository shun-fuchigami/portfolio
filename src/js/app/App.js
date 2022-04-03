import * as PIXI from 'pixi.js';

/**
 * Appクラス
 * PIXIキャンバスを生成
 */
export class App{
  static createApp = () => {
    let w = 1440;
    let h = 900;
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

}