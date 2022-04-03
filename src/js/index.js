import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Tile } from './sprite/Tile.js';
import { Hero } from './sprite/Hero.js';
import { Key } from './key/Key.js';
import { Controller } from './sprite/controller/Controller.js';
import { BackGroundGraphics } from './graphics/BackGroundGraphics.js';
import { TileContainer } from './container/TileContainer.js';
import { ControllerContainer } from './container/Controller/ControllerContainer.js';
import { TILE_MAP_SIZE,} from './config.js' 
import { ButtonContainer } from './container/Controller/ButtonContainer.js';
import { ArrowContainer } from './container/Controller/ArrowContainer.js';

/**
 * メイン処理
 */

  /**
   * リサイズ設定
   */ 
  window.addEventListener('load',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight);
    app.stage.scale.set(window.innerWidth / screen.width);
  });
  
  window.addEventListener('resize',(e)=>{
    app.renderer.resize(window.innerWidth , window.innerHeight);
    app.stage.scale.set(window.innerWidth / screen.width);
  });
  
  /**
   * PIXIキャンバスの生成
   */
  export const app = App.createApp();

  /**
   * 背景図形の生成
   */
    /**
     * 外側の円
     */
    const outerCircle = new BackGroundGraphics(
      app.screen.width / 2,
      app.screen.height,
      app.screen.width,
      app.screen.height,
      0xe5d6d2,
      1);
      
    /**
     * 内側の円
     */
    const innerCircle = new BackGroundGraphics(
      app.screen.width/2,
      app.screen.height,
      app.screen.width - 20,
      app.screen.height - 20,
      0xdbccc8,
      1);
      
      
    /**
     * 図形の描写
     */
    outerCircle.renderCircle();
    innerCircle.renderCircle();
      
    /**
     * ステージへ追加
     */
    app.stage.addChild(outerCircle.graphics);
    app.stage.addChild(innerCircle.graphics);
    
  /**
   * タイルコンテナの生成
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
      tile.initTile();
      tileContainer.addSprite(tile);
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
  tileContainer.addSprite(hero);


  /**
   * コントローラコンテナの生成
   */

  const controllerContainer = new ControllerContainer();
  const arrowContainer = new ArrowContainer();
  const buttonContainer = new ButtonContainer();
  
  controllerContainer.container.x = app.screen.width * 0.1;
  controllerContainer.container.y = app.screen.height * 0.75;
  

  app.stage.addChild(controllerContainer.container);
  controllerContainer.addContainer(arrowContainer);
  controllerContainer.addContainer(buttonContainer);

  /**
   * コントローラースプライトの生成
   */
  const buttonBg = new Controller("bg");
  const buttonUp = new Controller("up");
  const buttonDown = new Controller("down");
  const buttonRight = new Controller("right");
  const buttonLeft = new Controller("left");
  const buttonA = new Controller("a");
  const buttonB = new Controller("b");

  
  arrowContainer.addSprite(buttonBg);
  arrowContainer.addSprite(buttonUp);
  arrowContainer.addSprite(buttonDown);
  arrowContainer.addSprite(buttonRight);
  arrowContainer.addSprite(buttonLeft);
  buttonContainer.addSprite(buttonA);
  buttonContainer.addSprite(buttonB);

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
    e.preventDefault();
    if(key.checkInvalidkey(e.code) === false){
      return;
    }
    key.setStatus(e.code,true);
  });
  
  document.addEventListener('keyup',(e)=>{
    e.preventDefault();
    if(key.checkInvalidkey(e.code) === false){
      return;
    }
    key.setStatus(key.code,false);
  })


console.log(window.innerWidth);
console.log(window.innerHeight);


