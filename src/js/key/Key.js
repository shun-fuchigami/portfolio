
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

  checkInvalidkey(code){
    if(code === "ArrowUp" || code === "ArrowDown" || code === "ArrowRight" || code === "ArrowLeft" ){
      return true;
    } else {
      return false;
    }
  }

}