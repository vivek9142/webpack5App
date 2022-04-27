# webpack5App

*1 - Removing name,version,desc,main,repository,keywords,bugs,license,author,homepage since we are string the project not publishing the package and start with minimal setup

*2 - Adding scripts for webpack start,watch and build

*3 - adding the Private = true in package.json to make it private and since its not used for publishing the package so we can do it for our personal projects.

*4 - adding the scripts in src/ folder and inside file.js since webpack look for app files in src folder. when we're 
build the app it will be exported the app in dist folder. so we need to add dist folder in gitignore.

