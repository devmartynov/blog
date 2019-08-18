require('yii-steroids/webpack')
    .config({
        port: 8080,
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/public',
        sourcePath: __dirname + '/src',
        useHash: true,
        devServer: {
            proxy: {
                '**': null,
            },
        },
        webpack: {
            module: {
                rules: {
                    ts: {
                        test: /\.tsx?$/,
                        use: ['babel-loader', 'ts-loader'],
                    },
                },
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
                alias: {
                    actions: __dirname + '/src/actions',
                    reducers: __dirname + '/src/reducers',
                    routes: __dirname + '/src/routes',
                    components: __dirname + '/src/components',
                    shared: __dirname + '/src/shared',
                    types: __dirname + '/src/types',
                    enums: __dirname + '/src/enums',
                    ui: __dirname + '/src/ui',
                    data: __dirname + '/src/data',
                    style: __dirname + '/src/style',
                },
            },
        },
    })
    .base('./src/client.tsx');
