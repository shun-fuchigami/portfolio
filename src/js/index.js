import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Loaderimg } from './loader/Loaderimg.js';
import { 
  TILE_MAP,
  TILE_MAP_SIZE,
  TILE_WIDTH,
  TILE_HEIGHT,
  TILE_START_Y,
  TILES,
  } from './config.js' 

/**
 * メイン処理
 */

  /**
   * リサイズ設定
   */

  window.addEventListener('load',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight-50);
    tileContainer.x = window.innerWidth / 2;
    tileContainer.scale.set(app.screen.width / screen.width)

  });
  window.addEventListener('resize',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight-50);
    tileContainer.x = window.innerWidth / 2;
    tileContainer.scale.set(app.screen.width / screen.width)
  });
  
  /**
   * PIXIキャンバスの生成
   */
  const app = App.createApp();

  /**
   * コンテナの生成
   * キャンバスへ追加
   */
  const tileContainer = new PIXI.Container();
  app.stage.addChild(tileContainer);

  /**
   * 読み込んだスプライトをコンテナへ追加
   * TILE_MAPの配列番号をx,y 配列の値を読み込む画像としてスプライトを生成
   */

  for (let i = 0; i < TILE_MAP_SIZE; i++){
    for (let j = 0; j < TILE_MAP_SIZE; j++){
      let tile = Loaderimg.tileLoad(TILE_MAP[i][j]);
      tile.x = (i-j) * TILE_WIDTH /2;
      tile.y = TILE_START_Y  + (i+j) * TILE_HEIGHT /2;
      console.log(tile.texture.baseTexture.realWidth);
      tile.anchor.set(0.5,1);
      tileContainer.addChild(tile);
      TILES[i][j] = tile;
    }
  }





