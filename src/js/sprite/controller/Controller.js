import * as PIXI from 'pixi.js';
import { LoaderImg } from "../../loader/LoaderImg";

export class Controller{
  constructor(name){
    this.sprite = LoaderImg.controllerLoad(name);

    switch (name) {
      case "a":
        this.sprite.anchor.set(0,1); 
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "b":
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
        this.sprite.anchor.set(0.5,1); 
        this.sprite.x = 0;
        this.sprite.y = -15;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "down":
        this.sprite.anchor.set(0.5,0); 
        this.sprite.x = 0;
        this.sprite.y = 15;
        this.sprite.interactive = true; 
        this.sprite.buttonMode = true;
        break;
      case "right":
        this.sprite.anchor.set(0,0.5); 
        this.sprite.x = 15;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
      case "left":
        this.sprite.anchor.set(1,0.5); 
        this.sprite.x = -15;
        this.sprite.y = 0;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        break;
    
    }
  }

}