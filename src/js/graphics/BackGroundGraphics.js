import * as PIXI from 'pixi.js';
import {app} from '../index.js'

export class BackGroundGraphics {
  constructor(color,alpha){
    this.graphics = new PIXI.Graphics();
    this.color = color;
    this.alpha = alpha;
    this.initGraphics();
  }

  initGraphics(){
    this.graphics.clear();
    this.x = app.screen.width / 2;
    this.y = app.screen.height;
    this.width = app.screen.width;
    this.height = app.screen.height;
  }

  renderInnerCircle(){
    this.graphics.beginFill(this.color,this.alpha);
    this.graphics.drawEllipse(this.x, this.y, this.width - 20,this.height - 20);
    this.graphics.endFill();
  }
  
  renderOuterCircle(){
    this.graphics.beginFill(this.color,this.alpha);
    this.graphics.drawEllipse(this.x, this.y, this.width,this.height);
    this.graphics.endFill();
  }
  


}

