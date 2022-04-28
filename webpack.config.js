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
    module:{
        rules:[{
            // test:/\.s?css$/i, or
            test:/\.(s[ac]|c)ss$/i,
            use:[MiniCSSExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader: "babel-loader",
            }
        },]
    },
    plugins:[new MiniCSSExtractPlugin()],
    devtool:"source-map",
    devServer:{
        static:"./dist",
        hot:true
    },
};