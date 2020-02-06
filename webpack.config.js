const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./",
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new tinyPngWebpackPlugin({
            key:"M38Y2383ZRQ5HF1wXDXwHF41KnqslLwg",
            ext: ['png', 'jpeg', 'jpg'],//img ext name
        })
    ],
    module: {
        rules: [
            // {
            //     "enforce": "pre",
            //     "test": /\.(js|jsx)$/,
            //     "exclude": /node_modules/,
            //     "use": "eslint-loader"
            // },
            {
            test: /\.s?[ac]ss$/,
            use: [
                modoDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                // 'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: {  
                loader: 'file-loader',  
                options: {  
                    name: '[name].[ext]',  
                    outputPath: './'  
                }  
            }
        }]
    }
}