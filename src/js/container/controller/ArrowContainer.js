import * as PIXI from 'pixi.js';
import { BaseContainer } from '../BaseContainer';

export class ArrowContainer extends BaseContainer{
  constructor(){
    super();
  }

  initPosition(){
    this.container.x = 0;
    this.container.y = 0;
  }
}