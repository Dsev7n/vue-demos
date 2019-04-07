/**
 *  使用es6语法引入模块，会自动从node_modules引入进来
 * 
 */
import Vue from 'vue';
import App from './App.vue'

new Vue({
    el:"#app",
    render:function(h) {   //使用render函数来渲染组件，推荐用这种方式
        return h(App);
    }
})