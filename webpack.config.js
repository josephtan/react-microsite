var webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildPath = "/public/";
module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
      publicPath: buildPath
  },
  module: {
      rules: [
          {
              test: /\.js|.jsx?$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                  presets: ["react", "env"]
              }
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("css-loader!sass-loader")
          }
      ]
    },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "app.css", allChunks: true }),
      new CopyWebpackPlugin([
          {from:"./src/data",to:"./src/data"}
      ]),
      new webpack.ProvidePlugin({
          "React": "react",
          "ReactDom":"react-dom"
      }),
      new webpack.LoaderOptionsPlugin({
          debug: true
      }),
      new HtmlWebpackPlugin({
          title: "react-microsite",
          filename: "index.html",
          template:"index.html"
      })
  ],
  devServer: {
    inline: false,
    historyApiFallback: true,
  }
};