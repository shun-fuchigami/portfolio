/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const GRID_SIZE = 10;\nconst TILE_WIDTH = 100;\nconst TILE_HEIGHT = 50;\nconst MAX_HEIGHT = 80;\n\nlet grid = [\n  [14, 23, 23, 23, 23, 23, 23, 23, 23, 13],\n  [21, 32, 33, 33, 28, 33, 28, 33, 31, 20],\n  [21, 34,  0,  0, 25, 33, 30,  1, 34, 20],\n  [21, 34,  0,  0, 34,  1,  1, 10, 34, 20],\n  [21, 25, 33, 33, 24, 33, 33, 33, 27, 20],\n  [21, 34,  4,  7, 34, 18, 17, 10, 34, 20],\n  [21, 34,  4,  7, 34, 16, 19, 10, 34, 20],\n  [21, 34,  6,  8, 34, 10, 10, 10, 34, 20],\n  [21, 29, 33, 33, 26, 33, 33, 33, 30, 20],\n  [11, 22, 22, 22, 22, 22, 22, 22, 22, 12],\n];\n\nlet tile_images = [];\n\nlet x_start = 0;\nlet y_start = 0;\n\nfunction draw_grid() {\n  x_start = width/2 - TILE_WIDTH/2;\n  y_start = 50;\n  for (let i = 0; i < GRID_SIZE; i++) {\n    for (let j = 0; j < GRID_SIZE; j++) {\n      draw_tile((tile_images[grid[j][i]]), i, j);\n    }\n  }\n}\n\nfunction draw_tile(img, x, y) {\n  let x_screen = x_start + (x - y) * TILE_WIDTH/2;\n  let y_screen = y_start + (x + y) * TILE_HEIGHT/2;\n  let z_offset = MAX_HEIGHT - img.height;\n  image(img, x_screen, y_screen + z_offset);\n}\n\n\nfunction setup() {\n  createCanvas(windowWidth, windowHeight);\n  for (let i = 0; i <= 34; i++) {\n    tile_images.push(loadImage(\"./images/tile-\" + i + \".png\"));\n  }\n}\n\nfunction draw() {\n  background(\"black\");\n  draw_grid();\n}\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;