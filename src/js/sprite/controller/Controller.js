import * as PIXI from 'pixi.js';
import { LoaderImg } from "../../loader/LoaderImg";

export class Controller{
  constructor(name){
    this.sprite = LoaderImg.controllerLoad(name);
    this.sprite.alpha = 0.5;
    switch (name) {
      case "a":
        this.code = "KeyZ"
        this.sprite.anchor.set(0,1); 
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "b":
        this.code = "KeyX"
        this.sprite.anchor.set(1,0); 
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "bg":
        this.sprite.anchor.set(0.5,0.5); 
        this.sprite.x = 0;
        this.sprite.y = 0;
        break;
      case "up":
        this.code = "ArrowUp"
        this.sprite.anchor.set(0.5,1); 
        this.sprite.x = 0;
        this.sprite.y = -15;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "down":
        this.code = "ArrowDown"
        this.sprite.anchor.set(0.5,0); 
        this.sprite.x = 0;
        this.sprite.y = 15;
        this.sprite.interactive = true; 
        this.sprite.buttonMode = true;
        break;
      case "right":
        this.code = "ArrowRight"
        this.sprite.anchor.set(0,0.5); 
        this.sprite.x = 15;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "left":
        this.code = "ArrowLeft"
        this.sprite.anchor.set(1,0.5); 
        this.sprite.x = -15;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
    }

  }

}