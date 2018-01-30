'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //指定入口
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.(jpg|ttf|svg|png|eot|woff|woff2|gif)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                //排除路径
                exclude: /node_modules/,
                // options: {
                //     presets: ['es2015'],
                //     plugins: ['transform-runtime']
                // }
            }, {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['es2015'],
                //     plugins: ['transform-runtime']
                // }
            },
            //处理.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        }),
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            $: 'jquery', //node_modules/jquery会声明成全局的
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        
    ],
    resolve: {
    　　extensions: ['.js', '.vue', '.json'],
    　　alias: {
        　　'vue$': 'vue/dist/vue.esm.js',
        // 　　'@': resolve('src'),
        // 　　'bootstrap':resolve('src/assets/bootstrap'),
    　　}
    },



}
