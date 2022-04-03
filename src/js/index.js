import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Tile } from './sprite/Tile.js';
import { Hero } from './sprite/Hero.js';
import { Key } from './key/Key.js';
import { TileContainer } from './container/TileContainer.js';
import { TILE_MAP_SIZE,} from './config.js' 

/**
 * メイン処理
 */

  /**
   * リサイズ設定
   */
  window.addEventListener('load',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight-50);
    tileContainer.container.x = window.innerWidth / 2;
    tileContainer.container.scale.set(app.screen.width / 1440)

  });
  window.addEventListener('resize',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight-50);
    tileContainer.container.x = window.innerWidth / 2;
    tileContainer.container.scale.set(app.screen.width / 1440)
  });
  
  /**
   * PIXIキャンバスの生成
   */
  const app = App.createApp();

  /**
   * コンテナの生成
   * キャンバスへ追加
   */
  const tileContainer = new TileContainer();
  app.stage.addChild(tileContainer.container);

  /**
   * TILE_MAPの配列番号をx,y としてタイルスプライトの生成・コンテナ追加
   */

  for (let i = 0; i < TILE_MAP_SIZE; i++){
    for (let j = 0; j < TILE_MAP_SIZE; j++){
      let tile = new Tile(i,j);
      tileContainer.add(tile);
      tileContainer.setTile(tile);
    }
  }

  /**
   * ヒーロースプライトの生成
   * 初期位置へ配置
   * タイルコンテナでヒーロースプライトを保持
   */

  const hero = new Hero();
  hero.sprite.position.set(
    tileContainer.getTilePosition(9,9,"x"),
    tileContainer.getTilePosition(9,9,"y")
  )
  tileContainer.OBJECT_MAP.push(hero);
  tileContainer.add(hero);

  /**
   * キーボード入力の状態を保持するインスタンスを生成
   */
  const key = new Key();

  
  /**
   * アニメーションループをスタート
   */
  app.ticker.add((dt)=>{

    /**
     * キー入力かつ初回入力の場合は方向転換
     */
    if(key.isKeyDown && key.isFirst){
      hero.setDirection(key.code);

    /**
     * キー入力かつ2回目以降の入力の場合は移動
     */
    }else if(key.isKeyDown && !(key.isFirst)){
      hero.move(key.code)
      hero.sprite.play()

    /**
     * それ以外の場合＝キー見入力の場合はアニメーションストップ
     */
    }else {
      hero.sprite.stop();
      hero.initSpriteFrame();
    }
  });


  /**
   * イベントリスナーの設定
   */
  document.addEventListener('keydown',(e)=>{
    if(key.checkInvalidkey(e.code) === false){
      return;
    }
    key.setStatus(e.code,true);
  });

  document.addEventListener('keyup',(e)=>{
    if(key.checkInvalidkey(e.code) === false){
      return;
    }
    key.setStatus(key.code,false);
  })



  

