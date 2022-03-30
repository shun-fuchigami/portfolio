
// Gridの情報を保持
export class Grid{
  constructor(){
    this.MAX_HEIGHT=200;
    // Gridで表示するイメージの番号
    this.gridArea=[
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
      [1,1,1,1,1,1,1,1,1,1,],
    ];
    // GridのX,Y方向のサイズ
    this.gridXSize=this.gridArea.length;
    this.gridYSize=this.gridArea[0].length;
    // Gridの開始地点
    this.x_start = 0;
    this.y_start = 0;
  }

}