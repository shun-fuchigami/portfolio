// 出力は絶対pathで指定しなければいけない為、node.jsのpathモジュールを使用する
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    // バンドルするファイルを指定
    entry: './src/js/index.js',
    mode: 'development',
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
    loader: 
        // {
        //   test: ビルド対象のファイルを指定
        //   includes: ビルド対象に含めるファイルを指定
        //   exclude: ビルド対象に除外するファイルを指定
        //   loader: loaderを指定
        //   query: loader に渡したいクエリパラメータを指定
        // },
        {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query://loaderに渡したいクエリパラメータを指定します
            {
            presets: ['es2015','stage-0']
            }
        }
}