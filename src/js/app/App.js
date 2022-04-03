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
      backgroundColor: 0xcccccc,
      width:window.innerWidth,
      height:window.innerHeight-50,
    });
    document.body.appendChild(app.view);
    return app;
  }
}