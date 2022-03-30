
// タイル画像と配列の位置を保持
export class Tile{

  //初期化
  constructor(
    imgNum,
    x,
    y,
    x_start,
    y_start,
    TILE_WIDTH,
    MAX_HEIGHT){

    // TILEの上面の横幅、縦幅（2：1の比率）、最大縦幅
    this.TILE_WIDTH = TILE_WIDTH;
    this.TILE_HEIGHT = TILE_WIDTH/2;
    this.MAX_HEIGHT = MAX_HEIGHT;
    // タイルのx,y座標
    this.x = x;
    this.y = y;
    // タイルが実際に描写されるpx指定の位置
    // z_offsetは画像ごとの高さの差異を相殺し、z軸方向を表現するために利用 
    this.x_screen=0;
    this.y_screen=0;
    this.z_offset=0;

    this.x_start=x_start;
    this.y_start=y_start;
    // タイルに表示する画像の番号
    this.imgNum = imgNum;
    this.img;
    this.setPositionView(this.x,this.y);

  }

  // Gridの座標を返す デフォルトはx軸
  getPosition(direction="x"){  
    if(direction === "x"){
      return this.x;
    }else if(direction === "y"){
      return this.y;
    }else{
      return;
    }
  }

  // 実際に表示される位置を返す デフォルトはx
  getPositionView(direction="x"){  

    if(direction === "x"){
      return this.x_screen;
    }else if(direction === "y"){
      return this.y_screen;
    }else{
      return;
    }

  }

  // 実際に表示される位置をセットする
  setPositionView(x,y){
    this.x_screen = this.x_start + (x - y) * this.TILE_WIDTH/2;
    this.y_screen = this.y_start + (x + y) * this.TILE_HEIGHT/2 - this.z_offset;
  }

  // タイルに表示する画像を返す
  getTileImgNum(){
    return this.imgNum;
  }
 
  getTileImg(){
    return this.img;
  }

  setTileImg(img){
    this.img = img;
    this.setZOffset();
  }

  // 画像からz_offsetを計算する
  setZOffset(){
    this.z_offset = this.MAX_HEIGHT - this.img.height; 
    this.setPositionView(this.x,this.y);
  }
}