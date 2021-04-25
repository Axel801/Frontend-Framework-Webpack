// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        scripts: { import: './src/js/scripts.js', filename: 'js/[name].js' },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.pug'),
            minify: false,
            hash: false
        }),
        new MiniCSSExtractPlugin({
            filename: './css/styles.css',
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src", "css"), to: path.resolve(__dirname, "dist", "css"), noErrorOnMissing: true },
                { from: path.resolve(__dirname, "src", "img"), to: path.resolve(__dirname, "dist", "img"), noErrorOnMissing: true },
                { from: path.resolve(__dirname, "src", "fonts"), to: path.resolve(__dirname, "dist", "fonts"), noErrorOnMissing: true },
                {
                    from: path.resolve(__dirname, "src", "js"),
                    to: path.resolve(__dirname, "dist", "js"),
                    noErrorOnMissing: true,
                    globOptions:{
                        dot:true,
                        gitignore:true,
                        ignore:['scripts.js']
                    }
                }
            ],
        }),

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\\scss\\styles.scss$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};
