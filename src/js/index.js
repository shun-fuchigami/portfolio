import * as PIXI from 'pixi.js';
import { App } from './app/App.js';
import { Tile } from './sprite/Tile.js';
import { Hero } from './sprite/Hero.js';
import { Icon } from './sprite/Icon.js';
import { Key } from './key/Key.js';
import { Controller } from './sprite/controller/Controller.js';
import { BackGroundGraphics } from './graphics/BackGroundGraphics.js';
import { ContainerHitArea } from './graphics/ContainerHitArea.js';
import { TileContainer } from './container/TileContainer.js';
import { TILE_MAP_SIZE,viewWidth,viewHeight, TILE_HEIGHT, TILE_WIDTH, DEF_HEIGHT} from './config.js' 
import { ButtonContainer } from './container/Controller/ButtonContainer.js';
import { ArrowContainer } from './container/Controller/ArrowContainer.js';


/**
 * リサイズ用関数
 */ 

   function resize(scaleNum){
    app.renderer.resize(viewWidth(),DEF_HEIGHT);
    tileContainer.initPosition();
    outerCircle.initGraphics();
    outerCircle.renderOuterCircle();
    innerCircle.initGraphics();
    innerCircle.renderInnerCircle();

    if(scaleNum > 0.5){ 
      app.renderer.resize(viewWidth(),DEF_HEIGHT - 200);
      tileContainer.container.scale.set(scaleNum);
      arrowContainer.container.scale.set(scaleNum);
      buttonContainer.container.scale.set(scaleNum);
      arrowContainer.container.x = tileContainer.getTileGlobalPosition(0,7,"x");
      buttonContainer.container.x = tileContainer.getTileGlobalPosition(7,0,"x");
      arrowContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");
      buttonContainer.container.y = tileContainer.getTileGlobalPosition(7,9,"y");
    }else{
      app.renderer.resize(viewWidth(),DEF_HEIGHT - 400);
      tileContainer.container.scale.set(scaleNum);
      arrowContainer.container.scale.set(scaleNum + 0.2);
      buttonContainer.container.scale.set(scaleNum + 0.2);
      arrowContainer.container.x = tileContainer.getTileGlobalPosition(0,6,"x");
      buttonContainer.container.x = tileContainer.getTileGlobalPosition(6,0,"x");
      arrowContainer.container.y = tileContainer.getTileGlobalPosition(9,9,"y");
      buttonContainer.container.y = tileContainer.getTileGlobalPosition(9,9,"y");
    }

  }


  /**
   * ロード・リサイズ
   */
   window.addEventListener('load',()=>{
  
    if(viewWidth() >= 1028){
        resize(0.9)
      }else if(viewWidth() >= 800){
        resize(0.8)
      }else{
        resize(0.4)
      }
    })
  
    window.addEventListener('resize',()=>{
      
      if(viewWidth() >= 1028){
        resize(0.9)
      }else if(viewWidth() >= 800){
        resize(0.8)
      }else{
        resize(0.4)
      }
    })
  

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
      tileContainer.addSprite(tile);
      tileContainer.container.addChild(tile.lineSprite);
      tileContainer.pushTileMap(tile);
    }
  }

  /**
   * コンテナーのヒットエリア生成
   * タイルの4角が頂点
   */

   const containerHitArea = new ContainerHitArea(tileContainer.createPolygon());

  /**
   * アイコンスプライトの生成
   * 初期位置へ配置
   * タイルコンテナでアイコンスプライトを保持
   */

     const aboutIcon = new Icon("about");
     aboutIcon.sprite.position.set(
       tileContainer.getTilePosition(0,7,"x"),
       tileContainer.getTilePosition(0,7,"y")
     )
     tileContainer.ICON_MAP.push(aboutIcon);
     tileContainer.addSprite(aboutIcon);


     const careerIcon = new Icon("career");
     careerIcon.sprite.position.set(
       tileContainer.getTilePosition(0,3,"x"),
       tileContainer.getTilePosition(0,3,"y")
     )
     tileContainer.ICON_MAP.push(careerIcon);
     tileContainer.addSprite(careerIcon);

     
     const skillIcon = new Icon("skill");
     skillIcon.sprite.position.set(
       tileContainer.getTilePosition(3,0,"x"),
       tileContainer.getTilePosition(3,0,"y")
     )
     tileContainer.ICON_MAP.push(skillIcon);
     tileContainer.addSprite(skillIcon);

     const galleryIcon = new Icon("gallery");
     galleryIcon.sprite.position.set(
       tileContainer.getTilePosition(7,0,"x"),
       tileContainer.getTilePosition(7,0,"y")
     )
     tileContainer.ICON_MAP.push(galleryIcon);
     tileContainer.addSprite(galleryIcon);
  

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
  tileContainer.HERO_MAP.push(hero);
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
     * 操作説明ボタンが押された場合
     */

    document.querySelector(".room button").addEventListener("click",()=>{
      document.querySelector(".how-to-container").classList.toggle("show");
      document.querySelector(".how-to-container").classList.toggle("hidden");
    });
    
    /**
     * クローズボタンが押された場合
     */
    let closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(button=>{
      button.addEventListener("click",(e)=>{
        button.parentElement.classList.toggle("show");

      })
    })

    /**
     * キーボード操作
     */
      /**
       * コードから仮想コントローラの対応ボタンを返す
       * @param {string} code 
       * @returns 
       */
      function getButton(code){
        let button = buttons.find((button)=>{
          return button.code === code;
        })
        return button;
      }
  
      /**
       * キーが押下された場合
       */
       document.addEventListener('keydown',(e)=>{
        e.preventDefault();
  
        if(key.checkArrowKey(e.code)){
          getButton(e.code).sprite.alpha = 1;
          key.setStatus(e.code,true);

        }else if (key.checkZKey(e.code)){
          getButton(e.code).sprite.alpha = 1;
          if(hero.selectTile.onIcon){
            document.querySelector(`.${hero.selectTile.icon.name}-container`).classList.add("show");
          }
          
        }else if (key.checkXKey(e.code)){
          getButton(e.code).sprite.alpha = 1;
          tileContainer.ICON_MAP.forEach(icon=>{
            document.querySelector(`.${icon.name}-container`).classList.remove("show");
          })

        }else{
          return;
        };
      });
      
      /**
       * キーの押下が終了した場合
       */
      document.addEventListener('keyup',(e)=>{
        e.preventDefault();
        if(key.checkKey(e.code)){
          getButton(e.code).sprite.alpha = 0.5;
          key.setStatus(key.code,false);
        }else{
          return;
        };
      });
  
    /**
     * 仮想コントローラー操作
     * ボタン配列をループしてイベントを追加
     */
      
    buttons.forEach((button)=>{
      
      /**
       * ボタンが押下された場合
       */
      button.sprite.on('pointerdown',(e)=>{
        if(key.checkArrowKey(button.code)){
          getButton(button.code).sprite.alpha = 1;
          key.setStatus(button.code,true);

        }else if (key.checkZKey(button.code)){
          getButton(button.code).sprite.alpha = 1;
          if(hero.selectTile.onIcon){
            document.querySelector(`.${hero.selectTile.icon.name}-container`).classList.add("show");
          }
          
        }else if (key.checkXKey(button.code)){
          getButton(button.code).sprite.alpha = 1;
          tileContainer.ICON_MAP.forEach(icon=>{
            document.querySelector(`.${icon.name}-container`).classList.remove("show");
          })

        }else{
          return;
        };
      });

      /**
       * ボタンの押下が終了した場合
       */ 
      button.sprite.on('pointerup',(e)=>{
        if(key.checkKey(button.code)){
          button.sprite.alpha = 0.5;
          key.setStatus(button.code,false);
        }
      });
    });


  /**
   * アニメーションループ
   */
   app.ticker.add((dt)=>{
    
    /**
     * アイコンスプライトのアニメーション開始
     */
    aboutIcon.sprite.play();
    careerIcon.sprite.play();
    skillIcon.sprite.play();
    galleryIcon.sprite.play();

    /**
     * ヒーロースプライト・アイコンスプライトの位置の更新
     */
    hero.initPoint();
    aboutIcon.initPoint();
    careerIcon.initPoint();
    skillIcon.initPoint();
    galleryIcon.initPoint();

    /**
     * ヒーロースプライト・アイコンスプライトのタイル位置更新
     */
    tileContainer.setOnIconTile(aboutIcon);
    tileContainer.setOnIconTile(careerIcon);
    tileContainer.setOnIconTile(skillIcon);
    tileContainer.setOnIconTile(galleryIcon);
    tileContainer.setOnHeroTile(hero);

    /**
     * 移動処理
     */

      /**
       * キー1回目の押下
       * ヒーロースプライトの方向をセット
       */
      if(key.isKeyDown && key.isFirst){
        hero.setDirection(key.code);

      /**
       * キー2回目以降の押下
       * ヒーロースプライトの向く方向へ移動
       */
      }else if(key.isKeyDown && !(key.isFirst)){

        if( !containerHitArea.checkContains(hero) ||
            tileContainer.getTile(hero.tileX,hero.tileY).onIcon 
          ){
          hero.sprite.stop();
          hero.moveReset(hero.direction);
          hero.initSpriteFrame();  
          key.initStatus();
        }else{
          hero.move(hero.direction)
          hero.sprite.play()
        }

      /**
       * キーが押下されていない場合
       * 移動を止める
       */
      }else {
        hero.sprite.stop();
        hero.initSpriteFrame();
      }

    /**
     * ヒーロースプライトの方向に応じて次のタイルをハイライト
     */
    try{
      tileContainer.highLightTile(hero.selectTile.tileX, hero.selectTile.tileY)
    }catch{
      return;
      /**
       * 何もしない
       */
    }
  
  });





