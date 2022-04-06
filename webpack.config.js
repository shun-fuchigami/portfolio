// 出力は絶対pathで指定しなければいけない為、node.jsのpathモジュールを使用する
const path = require('path');
const outputPath = path.resolve(__dirname, 'docs');

module.exports = {
    // バンドルするファイルを指定
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        // バンドルしてmain.jsとして出力
        filename: 'main.js',
        path: outputPath,
    },
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // ここではdistディレクトリのindex.htmlにアクセスするよう設定してます
    devServer: {
        static:{
            directory: outputPath,
        } 
    },
    module: {
    rules: [
        {
          // 拡張子 .js の場合
          test: /\.js$/,
          use: [
            {
              // Babel を利用する
              loader: "babel-loader",
              // Babel のオプションを指定する
              options: {
                presets: [
                  // プリセットを指定することで、ES2021 を ES5 に変換 ->エラーが発生したためコメントアウト
                  //   "@babel/preset-env",
                ],
              },
            },
          ],
        },
      ],
    },
    // ES5(IE11等)向けの指定
    target: ["web", "es5"],
  
    // loader: 
    //     // {
    //     //   test: ビルド対象のファイルを指定
    //     //   includes: ビルド対象に含めるファイルを指定
    //     //   exclude: ビルド対象に除外するファイルを指定
    //     //   loader: loaderを指定
    //     //   query: loader に渡したいクエリパラメータを指定
    //     // },
    //     {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query://loaderに渡したいクエリパラメータを指定します
    //         {
    //         presets: ['es2015','stage-0']
    //         }
    //     }
}