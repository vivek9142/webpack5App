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

## React with JSX
add react,react-dom , @babel/preset-react packages
add react preset plugin in array and add runtime as automatic babel.config.js

with automatic there is an opt in way for devs to not import react just when they're using the JSX. so this enhances performance.

add react code in index.js and add root div in index.html now run it.react will show the msg or content

when you create react code and compile it you wil get error since webpack is looking for js code but we are having jsx code so webpack config we need to do.
we need to add resolve property this will automatically look for these extensions

on runnning it will not run , show error since we dont have loaders setup

##Add Support for Images
first add scss file for inclusion of file in css. then add rule in webpack.config to use for img assets.
publicPath is designated for specifying the path where the rendered output of img is stored.

another way is to load img asset in app is to import asset in the component
itself.
so by this time all imgs are stored in root directory of dist folder. we need to store this in specific folder.
we'll add new prop after target as output and add a object with assetModuleFileName as 
"images/[hash][ext][query]"

also if we don't want images as whole we can convert all images to base64 codee format in
contain all the code in base js file.to do this we need to modify rule of image with type of
asset/inline.

You can also let Webpack decide which asset to be in base64 i.e, inline or which asset can be files. Webpack decides based on default max size i.e, 8KB whether it should be inline or as an asset.

Asset or Asset/resouce is a recommended way to choose here.

We can also update the maxSize here in Asset type so the Webpack compare size to 
size specified in the parser maxSize prop obj. if its less then it will convert to inline img else as an asset.

## Cleaning the Dist Build folder
By this commmand in package.json, it will clean all files in dist folder so it will also delete the 
index.html file which is already not tracked in git and also not generated with webpack 

we need to install html-webpack-plugin, import in webpack.config, go to plugins here and add it there.
and We are gonna move the index.html file from dist to src file. 

so when we clean dist folder and also run build command now it builds whole dist folder 
with index.html file but it has some missing pieces here including the div root element.

so we neeed to add new prop in the htmlwebpackplugins in plugins prop to direct the template to index.html in src folder.

here after doing this it will use template to render the app index.html file 
but it renders the file assets in index.html as duplicate so we need to
remove the css and main.js embed from the template index.html. this is what it 
does by default.

## Plugin to clean folder dist
install and add clean-webpack-plugin, destruct CleanWebpackPlugin from require and put it at the top of the pulgins list.

but when we will run it we'll get an error
"clean-webpack-plugin: options.output.path not defined. Plugin disabled..."

so we need to add a path prop in output prop of webpack.config in path we need to put absolute path so for this we need to use path.resolve() (path-node pre-existing module)

## React Fast Refresh feature
By this live reloading of JSX with state keeping in place will take place.
by this hot reloading of jsx will take place instantaneously.

for this we need to install @pmmmwh/react-refresh-webpack-plugin,react-refresh

update the babel file first. and update webpack config to plugins and add this plugin there.

so after start server on this, it will not update the elements but the elements are said to be updated here. here it works but previously it doesn't 
so to rectify this bug we need to specify the entry obj to src.

so by this we can also do some syntax error and react will instaneously tell where's the error it
will remove the error also keeping all the previous states.

We can also create an component here in meanwhile react will wait for save and when it happens it updates the dom n also keeping the previous state.

Also we can keep the states while we remove the elements of the app such as h1,button to update the state , e.g , the siblings.

we can also wipe the state while updating the dom elements. for this we need to add comments // @refresh reset


## React-Refresh Bug 
if we run build command we will run into an error 
"[ReactRefreshPlugin] Hot Module Replacement (HMR) is not enabled! React Refresh requires HMR to function properly." 

so we need to change babel.config so that it run react-refresh/babel plugin only in dev mode.so we will push this plugin only in dev mode.
same we need to do in webpack config.

## Build Dev command error bug fix

when we try to run command build-dev we will run into error

"[ReactRefreshPlugin] Hot Module Replacement (HMR) is not enabled! React Refresh requires HMR to function properly"

so what we're doing so far, is node_env we're checking with prod if its not prod so we're going to do reactRefreshWebpackPlgin, so we only want this when we're doing webpack dev-server and live-reloading, we don't want that on build dev.htorealoadingwebpack plugin is not loading in this and so the reactrefreshWebpackPlugin is relying on it so popping out the error.

we can set another env variable and check against it in webpack.config
