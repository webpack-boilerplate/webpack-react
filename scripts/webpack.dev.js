const { resolve } = require('path')

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '..'),

    mode: 'development',

    entry: {
        app: [
            './src/scss/style.scss',
            './src/main.tsx',
        ]
    },

    output: {
        clean: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            // Process application JS with Babel.
            // The preset includes JSX, Flow, TypeScript, and some ESnext features.
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },

    plugins: [
        new ESLintPlugin({
            // Plugin options
            extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
            eslintPath: require.resolve('eslint'),
            files: ['./src/**/*.tsx']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ]
}
