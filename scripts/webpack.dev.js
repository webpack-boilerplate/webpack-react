const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const commonDev = common('development')

module.exports = merge(commonDev, {
    devtool: 'inline-source-map',

    output: {
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name]-[id].js',
    },
})
