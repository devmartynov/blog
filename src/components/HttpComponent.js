import BaseHttpComponent from 'yii-steroids/components/HttpComponent';

export const STORAGE_ACCESS_TOKEN_KEY = 'token';

export default class HttpComponent extends BaseHttpComponent {

    resetConfig() {
        this._axios = null;
    }

    getAxiosConfig() {
        const headers = {};
        const clientStorage = require('components').clientStorage;

        // Set auth header
        const token = clientStorage.get(STORAGE_ACCESS_TOKEN_KEY) || null;
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
