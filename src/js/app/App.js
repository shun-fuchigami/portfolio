import * as PIXI from 'pixi.js';

/**
 * Appクラス
 * PIXIキャンバスを生成
 */
export class App{
  static createApp = () => {
    // キャンバスサイズと背景色を指定してステージを作成
    const app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x485859, // 背景色(= #cccccc),
      width:window.innerWidth,
      height:window.innerHeight-50,
    });
    document.body.appendChild(app.view);
    return app;
  }
}