# webpack5App

##Initializing Webpack App
*1 - Removing name,version,desc,main,repository,keywords,bugs,license,author,homepage since we are string the project not publishing the package and start with minimal setup

*2 - Adding scripts for webpack start,watch and build

*3 - adding the Private = true in package.json to make it private and since its not used for publishing the package so we can do it for our personal projects.

*4 - adding the scripts in src/ folder and inside file.js since webpack look for app files in src folder. when we're 
build the app it will be exported the app in dist folder. so we need to add dist folder in gitignore.

5* - Adding index.html file in dist folder and embed js file in html document

6* - Live Reloading is not embed in this project so we need to add webpack config file to enable it. Adding webpack.config.js
add mode as dev and in devServer static key is used (contentBase is changed to static name) for hot reloading feature

7* - in main.js file we ll get the code in 1 line so in order to decorate it accoring we can add devtool as false in webpack.config

##Adding Babel in Webpack

1* - install babel-loader, @babel/core @babel/present-env
2* - Adding configuration for Babel in webpakc.config
3* - Adding module obj comprising of rules to test for specific files in webpack.config, exclude to exclude some folder e.g here node_modules since babel process is hyper expensive, use to use babel-loader
4*  - Adding babel.config and add preset babel-loader in array 

## Adding Source-Map
In our app currently if we go to browser and see for js file , it will shown as final transpiled code 
But if we want to look for source code here in js file we can add this functionality in webpack.config in devtool object ,we can replace false with "source-map". For this we need to restart server and browser

## Changing the Mode with build
we can change the mode to prod and dev async in the build script as well as in the webpack config

## Adding CSS Support (+Sass,+PostCSS)
We'll add css file and try to import it in index.js
running build will generate the error
"You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. "

So We need to add module css-loader,mini-css-extract-plugin in project. Css-loader will inject the styles in js bundle. mini-css-extract -plugin will create resources in a final one single css file

In Webpack.config,We need to import the miniCSSExtractPlugin and addit inside the plugins object
and add a new rule for css
in use obj in rules , webpakc will run first css-loader and the MiniCSSExtractPlugin.Loader package 
for css files

So right now we need to embed the css file to html file in build folder.
## Adding Hot Reloading
After we notice if we make any changes in css file the whole app will relaod. it is due to Live Reloading but now we need to enable Hot reloading.
for this we need to add hot:true in devServer obj in Webpack.config file. so by this we want to
do anything inside html file in browser and do changes in css file n VScode it will not change the updated content but add style to prexisting build

## Adding SASS
Adding Sass files and then adding it webpack.config for scss. it will check for both css and scss files. But also we need the sass and sass-loader packages. so  we need to add sass-loader in rules for scss,css rules.

## Adding PostCSS
Adding PostCSS files , adding postcss.config.js and then adding it webpack.config for scss. it will check for both css and scss files. But also we need the postcss postcss-preset-env postcss-loader packages. so  we need to add postcss-loader before sass-loader in rules for postcss files since if you add any comments in css or sass it would be removed if postcss-loader is added at last.

## Adding Browserlist
BrowserList is added in app to support a large list of browsers with backward compatibility
to add this add .browserslistrc file in root directory of app.

There is a bug in webpack when browserlist is added here, it is not doing hot reloading. 
so to remove this, we need to add target in webpack.config switch to browserlist in production 
but in web in dev mode.