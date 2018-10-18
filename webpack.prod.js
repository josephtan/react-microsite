/**
 * Created by Joseph Tan on 16/10/2018.
 */
let webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const APP_PATH ="./src";
const BUILD_PATH = "prod";
const PUBLIC_PATH = "/projects/react-test/";
module.exports = {
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 5,
                    mangle: true,
                    output: {
                        "ascii_only": true
                    }
                },
                sourceMap: true,
            })
        ]
    },
    mode: "production",
    entry: APP_PATH + "/index.jsx",
    output: {
        path: path.resolve(BUILD_PATH),
        filename: "bundle.js",
        publicPath: PUBLIC_PATH
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
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
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
            template: "template.html"
        })
    ],
    devServer: {
        inline: false,
        historyApiFallback: true,
    }
};