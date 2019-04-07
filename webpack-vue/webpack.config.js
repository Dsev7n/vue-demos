let VueLoaderPlugin = require('vue-loader/lib/plugin'); //vue-loader和其他loader不一样，要引入这个plugin

module.exports = {
    entry:'./main.js',
    output:{
        filename:'build.js',
        path:__dirname,     //项目的根路径

    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader',  //使用loader都要加上引号
                
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{   //用babel-loader把es6->es5
                        presets:[
                            '@babel/preset-env'
                        ]
                    }
                },
                exclude:/node_modules/,
            },
                
            
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}