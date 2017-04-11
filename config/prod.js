const webpack = require("webpack");
const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {

        // Enable sourcemaps for debugging webpack's output.
        devtool: "cheap-source-map",

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
                comments: false
            })
        ]
    });
};
