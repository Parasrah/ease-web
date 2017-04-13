const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false,
                sourceMap: false
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "..", "templates", "prod.html"),
                inject: 'body',
            })
        ]
    });
};
