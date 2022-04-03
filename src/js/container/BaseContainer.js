import * as PIXI from 'pixi.js';

export class BaseContainer {
  constructor(){
    this.container = new PIXI.Container();
  }

  addSprite(instance){
    this.container.addChild(instance.sprite);
  }

  addContainer(instance){
    this.container.addChild(instance.container);
  }

  addGraphics(instance){
    this.container.addChild(instance.graphics);
  }
}