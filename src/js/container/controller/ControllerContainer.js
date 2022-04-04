import * as PIXI from 'pixi.js';
import { BaseContainer } from '../BaseContainer';
import { app } from '../../index.js'

export class ControllerContainer extends BaseContainer{
  constructor(){
    super();
  }

  initPosition(){
    this.container.x = app.screen.width/2;
  }
}