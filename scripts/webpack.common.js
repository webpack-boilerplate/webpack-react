const { resolve } = require('path')

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

// Include if is production for extract css in [file].css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = mode => {
    const isDev = mode !== 'production'

    const config = {
        mode,

        context: resolve(__dirname, '..'),

        entry: {
            app: [
                './src/scss/style.scss',
                './src/main.tsx',
            ]
        },

        output: {
            clean: true,
            path: resolve(__dirname, '..', 'build')
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
                        isDev
                            // Creates `style` nodes from JS strings
                            ? 'style-loader'
                            // Extract `css` to to file .css
                            : MiniCssExtractPlugin.loader,
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
                files: ['./src/**/*.tsx']
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            })
        ],

        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                    },
                },
            },
        },
    }

    if (!isDev)
        config.plugins.push(new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: 'assets/css/[id].[contenthash].css',
        }))

    return config
}
