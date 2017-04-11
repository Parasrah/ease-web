const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
    });
};
