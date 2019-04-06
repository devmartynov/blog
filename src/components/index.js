import _merge from 'lodash-es/merge';

import ConfigComponent from './ConfigComponent';
import ClientStorageComponent from 'yii-steroids/components/ClientStorageComponent';
import HtmlComponent from 'yii-steroids/components/HtmlComponent';
import HttpComponent from './HttpComponent';
import LocaleComponent from './LocaleComponent';
import ResourceComponent from 'yii-steroids/components/ResourceComponent';
import StoreComponent from 'yii-steroids/components/StoreComponent';
import UiComponent from 'yii-steroids/components/UiComponent';

// Create instances
export const config = new ConfigComponent();
export const clientStorage = new ClientStorageComponent();
export const html = new HtmlComponent();
export const http = new HttpComponent();
export const locale = new LocaleComponent(clientStorage);
export const resource = new ResourceComponent();
export const store = new StoreComponent();
export const ui = new UiComponent();

const instances = {
    config,
    clientStorage,
    html,
    http,
    locale,
    resource,
    store,
    ui,
};

// Apply configuration
const customConfig = {
    http: {
        apiUrl: config.apiUrl,
    },
    store: {
        history: {
            basename: '/'
        },
    },
    ...instances.store.getState().config,
};
Object.keys(instances).forEach(name => {
    _merge(
        instances[name],
        customConfig[name] || {}
    );
});
