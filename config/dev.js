const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "..", "templates", "dev.html"),
                inject: 'body',
            })
        ]
    });
};
