import BaseHttpComponent from 'yii-steroids/components/HttpComponent';

export default class HttpComponent extends BaseHttpComponent {

    getAxiosConfig() {
        const headers = {};
        const store = require('components').store;

        // Set auth header
        const token = store.getState().auth.token;

        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }

        const defaultConfig = super.getAxiosConfig();
        return {
            ...defaultConfig,
            headers: {
                ...defaultConfig.headers,
                ...headers,
            },
        };
    }
}
