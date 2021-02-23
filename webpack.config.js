const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode:"development",

  entry: {
    index:'./src/index/index.js',
    about:'./src/about/about.js',
    work:'./src/work/work.js',
    pricing:'./src/pricing/pricing.js',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader","css-loader"],
      },
    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "work.html",
      template: "./src/work/work.html",
    }),

    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "pricing.html",
      template: "./src/pricing/pricing.html",
    }),

    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about/about.html",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    open: true,
  },

}
