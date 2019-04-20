const CopyWebpackPlugin = require('copy-webpack-plugin');

require('yii-steroids/webpack')
    .config({
        port: 8000,
        staticPath: '',
        devServer: {
            proxy: {
                '**': null,
            },
        },
        webpack: {
            module: {
                rules: {
                    js: {
                        test: /\.jsx?$/,
                        exclude: /node_modules(\/|\\+)(?!yii-steroids)/,
                    },
                },
            },
            resolve: {
                extensions: ['.js', '.jsx'],
                alias: {
                    actions: __dirname + '/src/actions',
                    components: __dirname + '/src/components',
                    enums: __dirname + '/src/enums',
                    reducers: __dirname + '/src/reducers',
                    shared: __dirname + '/src/shared',
                    types: __dirname + '/src/types',
                    ui: __dirname + '/src/ui',
                    static: __dirname + '/src/static',
                },
            },
            plugins: [
                new CopyWebpackPlugin([{
                    from: 'src/static/images',
                    to: 'images'
                }]),
            ],
        },
    })
    .base('./src/client.js')
