let webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildPath = "/public";
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
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      { loader: "css-loader", options: { minimize: true } }
                  ]
              })
          },
          {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [{
                  loader: "url-loader",
                  options: {
                      mimetype: "application/font-woff",
                      name: "/fonts/[name].[ext]",
                      limit:50000
                  }
              }]
          },
          {
             test:/\.scss$/,
             loader:"sass-loader",
              options: {   includePaths: [path.resolve(__dirname,"node_modules/compass-mixins/lib")], sourceMap: true, sourceMapContents: false}
          },{
              test: /\.(png|jp(e*)g|gif)$/,
              use: [{
                  loader: "file-loader",
                  include: "./images",
                  options: {
                    //  limit: 8000, // Convert images < 8kb to base64 strings
                      name: "/images/[name].[ext]"
                  }
              }]
          }
      ]
    },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "app.css", allChunks: true }),
      new CopyWebpackPlugin([
          {from:"./src/data",to:"./data"},
          {from:"./src/fonts",to:"./fonts"},
          {from:"./src/images",to:"./images"}
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