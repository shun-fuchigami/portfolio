import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Tile } from './sprite/Tile.js';
import { Hero } from './sprite/Hero.js';
import { Key } from './key/Key.js';
import { Controller } from './sprite/controller/Controller.js';
import { BackGroundGraphics } from './graphics/BackGroundGraphics.js';
import { TileContainer } from './container/TileContainer.js';
import { ControllerContainer } from './container/Controller/ControllerContainer.js';
import { TILE_MAP_SIZE,viewWidth,viewHeight} from './config.js' 
import { ButtonContainer } from './container/Controller/ButtonContainer.js';
import { ArrowContainer } from './container/Controller/ArrowContainer.js';

/**
 * メイン処理
 */
  /**
   * ロード・リサイズ設定
   */ 
  window.addEventListener('load',()=>{

    app.renderer.resize(viewWidth(),viewHeight());
    
    outerCircle.initGraphics();
    outerCircle.renderOuterCircle();
    innerCircle.initGraphics();
    innerCircle.renderInnerCircle();

    tileContainer.initPosition();
    controllerContainer.initPosition();
    arrowContainer.initPosition();
    buttonContainer.initPosition();

    if(viewWidth() >= 1000){
      tileContainer.container.scale.set(1);
      controllerContainer.container.scale.set(0.8);
      arrowContainer.container.x -= 300 
      buttonContainer.container.x += 300
    }else if(viewWidth() >= 600){
      tileContainer.container.scale.set(0.8);
      controllerContainer.container.scale.set(0.5);
      arrowContainer.container.x -=500
      buttonContainer.container.x +=500
    }else{
      tileContainer.container.scale.set(1.2);
      controllerContainer.container.scale.set(1.2);
      arrowContainer.container.x -= 200
      buttonContainer.container.x += 150
      arrowContainer.container.y += 100
      buttonContainer.container.y += 100
    }
    
  })
  
  window.addEventListener('resize',()=>{

    app.renderer.resize(viewWidth(),viewHeight());
    
    outerCircle.initGraphics();
    outerCircle.renderOuterCircle();
    innerCircle.initGraphics();
    innerCircle.renderInnerCircle();

    tileContainer.initPosition();
    controllerContainer.initPosition();
    arrowContainer.initPosition();
    buttonContainer.initPosition();

    if(viewWidth() >= 1000){
      tileContainer.container.scale.set(1);
      controllerContainer.container.scale.set(0.8);
      arrowContainer.container.x -= 300 
      buttonContainer.container.x += 300
    }else if(viewWidth() >= 600){
      tileContainer.container.scale.set(0.8);
      controllerContainer.container.scale.set(0.5);
      arrowContainer.container.x -= 500
      buttonContainer.container.x += 500
    }else{
      tileContainer.container.scale.set(1.2);
      controllerContainer.container.scale.set(2);
      arrowContainer.container.x -= 200
      buttonContainer.container.x += 150
      arrowContainer.container.y += 100
      buttonContainer.container.y += 100
    }

  })
  
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
     const outerCircle = new BackGroundGraphics(0xe5d6d2,1);
     outerCircle.initGraphics();
     outerCircle.renderOuterCircle();
    
     /**
      * 内側の円
      */
     const innerCircle = new BackGroundGraphics(0xdbccc8,1);
     innerCircle.initGraphics();
     innerCircle.renderInnerCircle();
       
     /**
      * コンテナ追加
      */
     app.stage.addChild(outerCircle.graphics);
     app.stage.addChild(innerCircle.graphics);
  
  /**
   * タイルコンテナの生成
   * キャンバスへ追加
   */
  const tileContainer = new TileContainer();
  tileContainer.container.pivot.set(0.5);
  tileContainer.container.x = app.screen.width/2;
  app.stage.addChild(tileContainer.container);

  /**
   * タイルスプライトの生成・コンテナ追加
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
    

  app.stage.addChild(controllerContainer.container);
  controllerContainer.addContainer(arrowContainer);
  controllerContainer.addContainer(buttonContainer);

  controllerContainer.container.x = app.screen.width/2;
  controllerContainer.container.y = app.screen.height/1.8;
  arrowContainer.container.x -= 300
  buttonContainer.container.x += 250
  

  arrowContainer.container.alpha = 0.5;
  buttonContainer.container.alpha = 0.5;

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

    if(key.isKeyDown && key.isFirst){
      hero.setDirection(key.code);

    }else if(key.isKeyDown && !(key.isFirst)){
      hero.move(key.code)
      hero.sprite.play()

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


