var webpack = require('webpack');
var path = require("path")
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var BundleTracker = require('webpack-bundle-tracker');
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js",
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
