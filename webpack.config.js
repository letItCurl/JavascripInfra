const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry:'./src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase: './dist',
        port: 6655,
        hot: true
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }/*,
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }*/,
            {
                test: /\.jpg$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'img/',
                    publicPath: '../img'
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/stylesheet.[name].css"
        }),
        new webpack.ProvidePlugin({
            $ : 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin,
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./template.html'
        })
    ]
}