// setup時に読み込んだ画像を保持
const tileImages=[];
let a;
// 本処理
export const sketch = (p)=>{
  
  // 読み込み時の1番初めに実行
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    tileImages.push(p.loadImage("./imgs/grass.png"));
  }
  
  // setup後の繰り返し処理
  console.log(p.height);
  p.draw = () => {
    p.background('#485859');
    p.image(tileImages[0],1,1);
    if(p.windowWidth !== p.width || p.windowHeight!==p.height){
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }
    }
  }
};
