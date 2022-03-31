import { Grid } from './Grid.js';
import { Utils } from './Utils.js'

// setup時に読み込んだ画像を保持
const tileImages = [];
let tiles = [];

const grid = new Grid();  

// 本処理
export const sketch = (p)=>{
  
  // 読み込み時の1番初めに実行
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for(let i=0 ; i <= 35 ;i++){
      tileImages.push(p.loadImage("./imgs/tile-" + i+ ".png"));
    }
    grid.setPosition(p.width);
    tiles = (grid.createTile());
  }
  

  // setup後の繰り返し処理
  p.draw = () => {
    p.background('#485859');
    tiles.forEach( tile => {
      tile.setTileImg(tileImages[tile.imgNum]);
      p.image(
        tile.getTileImg(),
        tile.getPositionView("x"),
        tile.getPositionView("y"),
        )
      });

    let a = Utils.getTile(tiles,0,0);
    // console.log(a.img);
    
      

    if(p.windowWidth !== p.width || p.windowHeight !== p.height){
      p.windowResized = () => {
        p.background('#485859');
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }
    }
  }
};
