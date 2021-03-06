webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './static/app.js',
        //        styles: ['./static/main.scss']
    },
    output: {
        path: './static/build',
        filename: '[name].js',
        library: '[name]'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
            new ExtractTextPlugin('styles.css', { allChunks: true })
        ]
        //  devServer: {
        //    historyApiFallback: true,
        //    inline: true
        //  }
};
module.exports = webpackConfig;