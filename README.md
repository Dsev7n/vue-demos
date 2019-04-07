# vue-demos
## 一、发送AJAX请求

+ axios请求，看github上官方文档
+ axios不支持跨域
+ 安装axios:npm install axios -S，在node_modules中找到axios.min.js赋值到js文件夹中

### axios API
+ axios([options])
+ axios.get(url, [options]),传参方式
    1. 通过url传参
    2. 通过params选项传参

```
// Send a GET request
axios({
  method: 'get',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```
// Send a GET request (default method)
axios('/user/12345');

axios.post(url[, data[, config]])
```
+ axios.post(url, data,[options]);
+ axios默认发送数据时，数据格式是Request Payload， 并非我们常用的Form Data格式，所以参数必须要以键值对的形式传递，不能以json格式传递，传参方式
    1. 自己拼接为键值对
    2. 使用transformRequest选项在请求数据之前将数据进行转换
    3. 如果使用模块化开发，可以使用querystring模块进行转换

+ axios本身并不支持发送跨域的请求，没有提供相应的API，作者也没计划在axios添加支持发送跨域请求，所以只能使用第三方库。2


## 二、Vue生命周期
+ Vue2.0生命周期有8个阶段


## 三、内置组件
+ <component :is="">动态组件：多个组件使用同一个挂载点，然后动态在他们之间切换。
+ keep-alive组件：使用keep-alive组件缓存非活动组件，可以保留状态，避免重新渲染，默认每次切换会销毁非活动组件，重新渲染。
```
<keep-alive>
  <component is =""></component>
</keep-alive>
```

## 四、组件之间数据传递（通信）
+ 子组件只能在父组件内部使用
+ 默认情况下，子组件无法访问父组件中的数据，每个组件实例的作用域都是独立的。
### 4.1 子组件访问父组件的数据
1. 在调用子组件时，，绑定想要获取的父组件中的数据
2. 在子组件内部，使用props选项来声明获取的数据，即接收来自父组件的数据
+ 总结：父组件通过props向下传递数据给子组件
+ 注：组件中的数据共有三种形式：data、props、computed

### 4.2 父组件访问子组件的数据
1. 在子组件中使用vm.$emit(事件名, 数据)，触发一个自定义事件，事件名字自定义
2. 父组件在使用子组件的地方监听子组件触发的事件,并设置事件处理程序，用来接收数据，可以在mounted()里面触发事件
总结：子组件通过events给父组件发送消息

### 4.3 单向数据流
+ 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
+ 而且不允许子组件直接修改父组件中的数据，会报错，解决方式
  + 方式1：如果子组件想把它作为局部数据来使用，可以将数据存入data另一个变量中来操作，不影响父组件的数据
  + 方式2：如果子组件想修改数据并且想同步更新到父组件，两个方法
    1. 使用.syn(1.0版本支持，2.0版本不支持，2.3版本又开始支持)：需要显式地触发一个更新事件
    2. 可以将父组件中的数据包装成对象，然后 在子组件中修改对象的属性（因为对象是引用类型，指向同一个内存空间）推荐


### 4.4 非父子组件之间的通信
+ 非父子组件间的通信，可以通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件
```
var Event = new Vue();

A组件： Event.$emit(事件名, 要发送的数据)
B组件： Event.$on(事件名, 回调函数写成箭头函数)
```

## 五、slot内容分发
+ slot:位置，插槽
+ 作用：用来获取组件中的原内容.
+ 单一插槽，多个插槽，用法很简单

## 四、vue-router路由
+ 使用Vue.js开发SPA单页面应用，使用不同Url地址，显示不同的内容，但显示在同一个页面中

npm insatll vue-router -S

### 路由嵌套和参数的传递
+ 传参的两种形式
  1. 查询字符串  login?name=tom&pwd=123
  {{$route.query}}
  2. rest风格url  :  register/alice/456
  {{$route.params}}

### 路由实例的方法
+ router.push()  添加/切换路由，功能上与<router-link>相同
+ router.replace() 替换路由，不产生历史记录

## 五、单文件组件

### 1. .vue文件
+ 是Vue.js自定义的一种文件格式，一个vue文件就是一个单独的文件，在文件内疯转了组件相关的代码：html  css js
+ vue文件由三部分组成：<template> 、<style> 、<script>

### 2. vue-loader
+ 加载和解析vue文件的loader，基于webpack工具的。

### 3.vue-loader例子
+ webpack-demo
|-index.html
|-main.js   入口文件
|-App.vue  
|-package.json    工程文件
|-webpack.config.js    webpack配置文件
|-babelrc      Babel配置文件

手动搭建例子：webpack-vue

#### 3.1. 编写App.vue
#### 3.2. 安装相关模块
+ npm install vue -S
+ npm install webpack webpack-dev-server webpack-cli vue-loader vue-html-loader css-loader vue-style-loader file-loader vue-template-compiler -D
+ npm install -D babel-loader @babel/core @babel/preset-env webpack
+ babel-preset-env  //根据配置的运行环境自动启动需要的babel插件
+ vue-template-compiler  //预编译模板

#### 3.3. 编写入口文件main.js

#### 3.4. 编写webpack配置文件
#### 3.5. 编写.babelrc文件

#### 3.6.编写package.json文件

#### 3.7.运行测试
npm run dev

### 4. vue-cli脚手架
例子：vue_cli
