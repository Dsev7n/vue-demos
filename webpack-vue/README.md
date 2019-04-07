### webpack中配置vue文件
+ vue文件是Vue.js自定义的一种文件格式，一个vue文件就是一个单独的文件，在文件内疯转了组件相关的代码：html  css js
+ vue文件由三部分组成：<template> 、<style> 、<script>
+ 目录结构：
  + |-index.html
  + |-main.js   入口文件
  + |-App.vue  
  + |-package.json    工程文件
  + |-webpack.config.js    webpack配置文件
  + |-babelrc      Babel配置文件

#### 1. 编写App.vue
#### 2. 安装相关模块
+ npm install vue -S
+ npm install webpack webpack-dev-server webpack-cli vue-loader vue-html-loader css-loader vue-style-loader file-loader vue-template-compiler -D
+ npm install -D babel-loader @babel/core @babel/preset-env webpack
+ babel-preset-env  //根据配置的运行环境自动启动需要的babel插件
+ vue-template-compiler  //预编译模板

#### 3. 编写入口文件main.js

#### 4. 编写webpack配置文件
#### 5. 编写.babelrc文件

#### 6.编写package.json文件

#### 7.运行测试
npm run dev
