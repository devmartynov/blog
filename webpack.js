const webpack = require('webpack');
const utils = require('yii-steroids/webpack/utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const port = 8000;
const staticPath = '';

require('yii-steroids/webpack')
    .config({
        port: port,
        staticPath: staticPath,
        devServer: {
            proxy: {
                '**': null,
            },
        },
        webpack: {
            output: utils.isProduction()
                ? {
                    publicPath: '/',
                    filename: 'assets/bundle-[name].[hash].js',
                    chunkFilename: 'assets/bundle-[name].[hash].js',
                }
                : {
                    publicPath: `http://localhost:${port}/`,
                    filename: `${staticPath}assets/bundle-[name].[hash].js`,
                    chunkFilename: `${staticPath}assets/bundle-[name].[hash].js`,
                },
            module: {
                rules: {
                    ts: {
                        test: /\.tsx?$/,
                        use: ['babel-loader', 'ts-loader'],
                    },
                    js: {
                        test: /\.jsx?$/,
                        exclude: /node_modules(\/|\\+)(?!yii-steroids)/,
                    },
                    css: {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                    },
                    image: {
                        test: /\.(jpe?g|gif|png|svg)$/,
                        use: {
                            file: {
                                loader: 'file-loader',
                                options: {
                                    name: 'admin/images/[hash].[ext]',
                                },
                            },
                        },
                    },
                },
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                alias: {
                    actions: __dirname + '/src/actions',
                    components: __dirname + '/src/components',
                    enums: __dirname + '/src/enums',
                    models: __dirname + '/src/models',
                    reducers: __dirname + '/src/reducers',
                    routes: __dirname + '/src/routes',
                    shared: __dirname + '/src/shared',
                    static: __dirname + '/src/static',
                    style: __dirname + '/src/style',
                    types: __dirname + '/src/types',
                    ui: __dirname + '/src/ui',
                },
            },
            plugins: [
                new CopyWebpackPlugin([{
                    from: 'src/static/images',
                    to: 'images'
                }]),
                new MiniCssExtractPlugin({
                    filename: `assets/bundle-[name].[hash].css`,
                    chunkFilename: `assets/bundle-[id].[hash].css`,
                }),
                new HtmlWebpackPlugin({
                    inject: true,
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new Dotenv({
                    path: './.env',
                }),
                // Proxy all APP_* env variables
                new webpack.DefinePlugin(Object.keys(process.env).reduce((obj, key) => {
                    if (key.indexOf('APP_') === 0) {
                        obj['process.env.' + key] = JSON.stringify(process.env[key]);
                    }
                    return obj;
                }, {})),
            ],
        },
    })
    .base('./src/client.tsx');
