import * as PIXI from 'pixi.js';
import { Polygon } from 'pixi.js';

export class ContainerHitArea{
  constructor(poly){
    this.graphics = new PIXI.Graphics();
    this.graphics.hitArea = poly;
  }

  checkContains(object){
    return this.graphics.hitArea.contains(object.point.x , object.point.y);
  }
}