const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web"
if(process.env.NODE_ENV === "production") 
{
    mode="production";
    target = "browserslist"
}

module.exports = {
    mode:mode,
    target:target,
    output:{
        assetModuleFilename:"images/[hash][ext][query]"
    },
    module:{
        rules:[
        {
            test:/\.(png|jpe?g||gif||svg)$/i,
            // type:"asset/resource",
            type:"asset/inline"
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
    plugins:[new MiniCSSExtractPlugin()],
    resolve:{
        extensions:[".js",".jsx"]
    },
    devtool:"source-map",
    devServer:{
        static:"./dist",
        hot:true
    },
};