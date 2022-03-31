import * as PIXI from 'pixi.js';

// ステージを作る
const createApp = () => {
  // キャンバスサイズと背景色を指定してステージを作成
  const app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x485859, // 背景色(= #cccccc),
      width:window.innerWidth,
      height:window.innerHeight,
  });
  document.body.appendChild(app.view);
  return app;
}
const app = createApp()



