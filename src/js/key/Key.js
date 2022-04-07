
export class Key{
  constructor(){
    this.initStatus();
  }

  initStatus(){
    this.isKeyDown = false;
    this.code = null;
    this.isFirst = true;
  }

  setStatus(code,isKeyDown){
    this.code === code ? this.isFirst = false : this.isFirst = true;
    this.code = code;
    this.isKeyDown = isKeyDown;
  };


  checkKey(code){
    if(code === "ArrowUp" || code === "ArrowDown" || code === "ArrowRight" || code === "ArrowLeft" || code === "KeyZ" || code === "KeyX"){
      return true;
    } else {
      return false;
    }
  }

  checkArrowKey(code){
    if(code === "ArrowUp" || code === "ArrowDown" || code === "ArrowRight" || code === "ArrowLeft" ){
      return true;
    } else {
      return false;
    }
  }

  checkZKey(code){
  if(code === "KeyZ"){
      return true;
    } else {
      return false;
    }
  }
  
  checkXKey(code){
  if(code === "KeyX"){
      return true;
    } else {
      return false;
    }
  }
}