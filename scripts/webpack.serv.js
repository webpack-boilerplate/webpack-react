const { resolve } = require('path')

module.exports = {
    context: resolve(__dirname, '..'),

    mode: 'development',

    entry: {
        app: ['./src/scss/style.scss'],
    },

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins: [

    ]
}
