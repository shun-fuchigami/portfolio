import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Tile } from './sprite/Tile.js';
import { Hero } from './sprite/Hero.js';
import { Key } from './key/Key.js';
import { Controller } from './sprite/controller/Controller.js';
import { BackGroundGraphics } from './graphics/BackGroundGraphics.js';
import { TileContainer } from './container/TileContainer.js';
import { TILE_MAP_SIZE,viewWidth,viewHeight, TILE_HEIGHT, TILE_WIDTH} from './config.js' 
import { ButtonContainer } from './container/Controller/ButtonContainer.js';
import { ArrowContainer } from './container/Controller/ArrowContainer.js';


/**
 * リサイズ用関数
 */ 

   function resize(scaleNum){
    app.renderer.resize(viewWidth(),viewHeight());
    tileContainer.initPosition();
    outerCircle.initGraphics();
    outerCircle.renderOuterCircle();
    innerCircle.initGraphics();
    innerCircle.renderInnerCircle();

    if(scaleNum > 0.5){ 
      tileContainer.container.scale.set(scaleNum);
      arrowContainer.container.scale.set(scaleNum);
      buttonContainer.container.scale.set(scaleNum);
      arrowContainer.container.x = tileContainer.getTileGlobalPosition(0,7,"x");
      buttonContainer.container.x = tileContainer.getTileGlobalPosition(7,0,"x");
      arrowContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");
      buttonContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");
    }else{
      app.renderer.resize(viewWidth(),viewHeight()-200);
      tileContainer.container.scale.set(scaleNum);
      arrowContainer.container.scale.set(scaleNum);
      buttonContainer.container.scale.set(scaleNum);
      arrowContainer.container.x = tileContainer.getTileGlobalPosition(0,4,"x");
      buttonContainer.container.x = tileContainer.getTileGlobalPosition(4,0,"x");
      arrowContainer.container.y = tileContainer.getTileGlobalPosition(9,9,"y");
      buttonContainer.container.y = tileContainer.getTileGlobalPosition(9,9,"y");
    }

  }



/**
 * メイン処理
 */

  /**
   * PIXIキャンバスの生成
   */
  export const app = App.createApp();

 /**
   * 背景図形の生成
   */

  const outerCircle = new BackGroundGraphics(0xe5d6d2,1);
  const innerCircle = new BackGroundGraphics(0xdbccc8,1);
  outerCircle.initGraphics();
  innerCircle.initGraphics();
  outerCircle.renderOuterCircle();
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

  tileContainer.setTileHitArea();

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

  const arrowContainer = new ArrowContainer();
  const buttonContainer = new ButtonContainer();
    
  app.stage.addChild(arrowContainer.container);
  app.stage.addChild(buttonContainer.container);

  arrowContainer.container.x = tileContainer.getTileGlobalPosition(0,7,"x");
  buttonContainer.container.x = tileContainer.getTileGlobalPosition(7,0,"x");
  arrowContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");
  buttonContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");

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
   * 各ボタンを配列へ格納
   */
    let buttons = [];
    buttons.push(buttonBg);
    buttons.push(buttonUp);
    buttons.push(buttonDown);
    buttons.push(buttonRight);
    buttons.push(buttonLeft);
    buttons.push(buttonA);
    buttons.push(buttonB);
  

  /**
   * キーボード入力の状態を保持するインスタンスを生成
   */
  const key = new Key();

/**
 * イベントリスナー
 */

  /**
   * ロード・リサイズ
   */
   window.addEventListener('load',()=>{
      
    if(viewWidth() >= 1028){
      resize(0.9)
    }else if(viewWidth() >= 800){
      resize(0.8)
    }else{
      resize(0.5)
    }
  })

  window.addEventListener('resize',()=>{
    
    if(viewWidth() >= 1028){
      resize(0.9)
    }else if(viewWidth() >= 800){
      resize(0.8)
    }else{
      resize(0.5)
    }
  })

  /**
   * キーボード操作
   */
    /**
     * コードから仮想コントローラのボタンを返す
     * @param {String} code 
     * @returns 
     */
    function getButton(code){
      let button = buttons.find((button)=>{
        return button.code === code;
      })
      return button;
    }

     document.addEventListener('keydown',(e)=>{
      e.preventDefault();
      if(key.checkInvalidkey(e.code) === false){
        return;
      }
      getButton(e.code).sprite.alpha = 1;
      key.setStatus(e.code,true);
    });
    
    document.addEventListener('keyup',(e)=>{
      e.preventDefault();
      if(key.checkInvalidkey(e.code) === false){
        return;
      }
      getButton(e.code).sprite.alpha = 0.5;
      key.setStatus(key.code,false);
    })

  /**
   * 仮想コントローラー操作
   */
    buttons.forEach((button)=>{
      button.sprite.on('pointerdown',(e)=>{
        if(key.checkInvalidkey(button.code) === false){
            return;
        }
          button.sprite.alpha = 1;
          key.setStatus(button.code,true);
        })
        
        button.sprite.on('pointerup',(e)=>{
          if(key.checkInvalidkey(button.code) === false){
            return;
          }
          button.sprite.alpha = 0.5;
          key.setStatus(button.code,false);
        })
    })
    
  /**
   * アニメーションループ
   */

   app.ticker.add((dt)=>{
    
    if(key.isKeyDown && key.isFirst){
      hero.setDirection(key.code);

    }else if(key.isKeyDown && !(key.isFirst)){

      let nextX = hero.getNextFramePosition(key.code)["x"];
      let nextY = hero.getNextFramePosition(key.code)["y"];
      let nextTile = tileContainer.getCurrentTile(nextX,nextY); 

      console.log(nextTile)
      
      if(nextTile==null){
        hero.sprite.stop();
        hero.initSpriteFrame();  
        key.initStatus();
      }
      hero.move(key.code)
      hero.sprite.play()

    }else {
      hero.sprite.stop();
      hero.initSpriteFrame();
    }

    try {
      tileContainer.checkOnHeroTile(hero);
    } catch (error) {

    }
  });





