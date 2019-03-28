const path = require('path');

module.exports = require('yii-steroids/webpack/config.storybook')({
    webpack: {
        resolve: {
            alias: {
                actions: path.resolve(__dirname, '../src/actions'),
                components: path.resolve(__dirname, '../src/components'),
                enums: path.resolve(__dirname, '../src/enums'),
                reducers: path.resolve(__dirname, '../src/reducers'),
                shared: path.resolve(__dirname, '../src/shared'),
                types: path.resolve(__dirname, '../src/types'),
                ui: path.resolve(__dirname, '../src/ui'),
                'myua-uikit': __dirname + '/lib/myua-uikit',
            },
        },
    },
});
