/**
 * 設定関連
 */


/**
 * グリッドのサイズ
 */
export const TILE_MAP_SIZE = 10;

/**
 * タイルの幅
 */
export const TILE_WIDTH = 100;
export const TILE_HEIGHT = TILE_WIDTH/2;

/**
 * タイルの開始地点
 */

 export const TILE_START_Y = 150;
 

/**
 * タイルマップ 読み込むタイル画像の番号を設定
 */
export const TILE_IMG_MAP = [
  [1,1,1,1,1,1,1,1,1,1, ],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
  [1,1,1,1,1,1,1,1,1,1,],
]

/**
 * スプライトにしたタイルを保持
 */
export const TILES = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

export let viewWidth = () => window.innerWidth;
export let viewHeight = () => window.innerHeight;
export const DEF_WIDTH = 900;
export const DEF_HEIGHT = 600;
export const DEF_RETIO_X = 1; 
export const DEF_RETIO_Y = 0.75; 
