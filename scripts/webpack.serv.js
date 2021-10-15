const { resolve } = require('path')
const { merge } = require('webpack-merge')

const webpackDev = require('./webpack.dev')

module.exports = merge(webpackDev, {
    output: {
        publicPath: 'http://localhost:8080/'
    },

    devServer: {
        historyApiFallback: true,
        static: [
            {
                directory: resolve(__dirname, '..', 'public')
            },
            {
                directory: resolve(__dirname, '..', 'coverage/lcov-report'),
                publicPath: '/coverage'
            },
        ],
    },
})
