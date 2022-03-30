
// タイル画像と配列の位置を保持
export class Tile{

  //初期化
  constructor(tileImg,x,y){

    // TILEの上面の横幅、縦幅（2：1の比率）、最大縦幅
    this.TILE_WIDTH = 100;
    this.MAX_WIDTH = 200;
    this.TILE_HEIGHT= this.TILE_HEIGHT / 2;
    // タイルのx,y座標
    this.gridX = x;
    this.gridY = y;
    // タイルが実際に描写されるpx指定の位置
    // z_offsetは画像ごとの高さの差異を相殺し、z軸方向を表現するために利用 
    this.x_screen=0;
    this.y_screen=0;
    this.z_offset=0;
    // タイルに表示する画像
    this.tileImg = tileImg;

  }

  // Gridの座標を返す デフォルトはx軸
  getPosition(direction="x"){  
    if(direction === "x"){
      return this.gridX;
    }else if(direction === "y"){
      return this.gridY;
    }else{
      return;
    }
  }

  // Gridの座標をセットし、setPositionViewを呼び出す
  setPosition(x,y){
    this.gridX=x;
    this.gridY=y;
    this.setPositionView(this.x,this.y);
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
    this.y_screen = this.y_start + (x + y) * this.TILE_WIDTH/2 - this.z_offset;
  }

  // タイルに表示する画像を返す
  getTileImg(){
    return this.tileImg;
  }
  
  // タイルに表示する画像をセットする
  setTileImg(img){
    this.tileImg=img;
    setZOffset(this.tileImg);
  }

  // 画像からz_offsetを計算する
  setZOffset(img){
    this.z_offset = MAX_HEIGHT - img.height; 
  }
}