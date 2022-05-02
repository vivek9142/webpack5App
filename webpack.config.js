const path = require('path');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let mode = "development";
let target = "web";
const plugins = [
    new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin(),
        new htmlWebpackPlugin({
        template:'./src/index.html'
        }),
];

if(process.env.NODE_ENV === "PRODUCTION") 
{
    mode="production";
    target = "browserslist"
} 
if(process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode:mode,
    target:target,
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename:"images/[hash][ext][query]"
    },
    module:{
        rules:[
        {
            test:/\.(png|jpe?g|gif|svg)$/i,
            // type:"asset/resource",
            // type:"asset/inline",
            type:"asset",
            parser:{
                dataUrlCondition:{
                    maxSize:30*1024,
                }
            }
        },    
        {
            // test:/\.s?css$/i, or
            test:/\.(s[ac]|c)ss$/i,
            use:[{
                loader:MiniCSSExtractPlugin.loader,
                options:{publicPath:"",}
            },
            "css-loader",
            "postcss-loader",
            "sass-loader"]
        },
        {
            test:/\.jsx?$/,
            // saying it may or may not have x again
            exclude:/node_modules/,
            use:{
                loader: "babel-loader",
            }
        },]
    },
    plugins:plugins
    // [
        // new CleanWebpackPlugin(),
        // new MiniCSSExtractPlugin(),
        // new htmlWebpackPlugin({
        // template:'./src/index.html'
        // }),
        // new ReactRefreshWebpackPlugin()
    // ]
    ,
    resolve:{
        extensions:[".js",".jsx"]
    },
    devtool:"source-map",
    devServer:{
        static:"./dist",
        hot:true
    },
};