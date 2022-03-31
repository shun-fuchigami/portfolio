import { Tile } from './Tile.js';

// Gridの情報を保持
export class Grid{
  constructor(){
    // this.MAX_HEIGHT=200;
    // Gridで表示するイメージの番号
    this.gridArea=[
      [1,2,3,4,5,6,7,8,9,10,12,],
      [11,12,13,14,15,16,17,18,19,20,12,],
      [21,22,23,24,25,26,27,28,29,30,12,],
      [31,32,33,34,1,2,3,4,5,6,12,],
      [1,2,3,4,5,6,7,8,9,10,12,],
      [11,12,13,14,15,16,17,18,19,20,12,],
      [21,22,23,24,25,26,27,28,29,30,12,],
      [31,32,33,34,1,2,3,4,5,6,12,],
      [21,22,23,24,25,26,27,28,29,30,12,],
      [31,32,33,34,1,2,3,4,5,6,12,],
      [31,32,33,34,1,2,3,4,5,6,12,],
      [21,22,23,24,25,26,27,28,29,30,12,],
    ];
    // GridのX,Y方向のサイズ
    this.gridXSize=this.gridArea.length;
    this.gridYSize=this.gridArea[0].length;
    // TILEの上面の横幅、縦幅（2：1の比率）、最大縦幅
    this.TILE_WIDTH = 100;
    this.MAX_HEIGHT = 200;
    // Gridの開始地点
    this.x_start = 0;
    this.y_start = 0;
  }

  // Gridの開始地点をセット
  setPosition(width){
    this.x_start = width/2 - this.TILE_WIDTH;
    this.y_start = this.TILE_WIDTH*1.5;
  } 

  // Tileクラスを生成
  createTile(imgNum,x,y){
    const tiles = [];
    this.gridArea.forEach( (gridCol, x) =>{
      gridCol.forEach( (gridNum, y) =>{
        let tile = new Tile(
          gridNum,
          x,
          y,
          this.x_start,
          this.y_start,
          this.TILE_WIDTH,
          this.MAX_HEIGHT
          );
        tiles.push(tile);
      })
    })

    return tiles;
  }
}