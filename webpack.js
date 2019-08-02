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
    })
    .base('./src/client.js');
