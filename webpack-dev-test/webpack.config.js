var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
  loaders: [
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body'
  })]
};
