const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const commonProd = common('production')

module.exports = merge(commonProd, {
    output: {
        filename: 'assets/js/[name].[contenthash].js',
        chunkFilename: 'assets/js/[id].[contenthash].js',
    },
})
