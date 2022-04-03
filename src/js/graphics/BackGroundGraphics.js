import * as PIXI from 'pixi.js';


export class BackGroundGraphics {
  constructor(x,y,width,height,color,alpha){
    this.graphics = new PIXI.Graphics();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alpha = alpha;
  }

  renderCircle(){
    this.graphics.beginFill(this.color,this.alpha);
    this.graphics.drawEllipse(this.x, this.y, this.width,this.height);
    this.graphics.endFill();
  }
  
  renderRect(){
    this.graphics.beginFill(this.color,this.alpha);
    this.graphics.drawRect(this.x, this.y, this.width,this.height);
    this.graphics.endFill();
  }


}

