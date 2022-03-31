export class Utils{
  
  static getTile(tiles,x,y){
    let target = tiles.find(tile=>{
      return  tile.getPosition("x") === x  &&
              tile.getPosition("y") === y
    }) 
    return target;
  }

  static getTilePositionView(tiles,x,y,type="x"){
    let target;
      target = tiles.find(tile=>{
        return  tile.getPosition("x") === x  &&
                tile.getPosition("y") === y
      }).getPositionView(type) 

      return target;
  }
  
}