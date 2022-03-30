// setup時に読み込んだ画像を保持
const TileImages=[];

// 本処理
export const sketch = (p)=>{
  
  // 読み込み時の1番初めに実行
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }
  
  // setup後の繰り返し処理
  p.draw = () => {
    p.background('#0f2350');
    p.noStroke();
    p.fill(255);
    p.ellipse(p.windowWidth/2, p.windowHeight/2, 50, 50);
  }
};
