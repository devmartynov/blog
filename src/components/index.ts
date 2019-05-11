// TODO: fix @ts-ignore and tslint:disable
import _merge from 'lodash-es/merge';

// @ts-ignore
import ClientStorageComponent from 'yii-steroids/components/ClientStorageComponent';
// @ts-ignore
import ResourceComponent from 'yii-steroids/components/ResourceComponent';
// @ts-ignore
import StoreComponent from 'yii-steroids/components/StoreComponent';
// @ts-ignore
import UiComponent from 'yii-steroids/components/UiComponent';
// @ts-ignore
import HtmlComponent from 'yii-steroids/components/HtmlComponent';
import ConfigComponent from './ConfigComponent';
import HttpComponent from './HttpComponent';
import LocaleComponent from './LocaleComponent';

export interface IntConfig {
    http: Array<{
        apiUrl: string,
    }>;
    store: Array<{
        history: Array<{
            basename: string;
        }>;
    }>;
}

// Create instances
// TODO: add type to every export const
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
const customConfig: IntConfig = {
    http: {
        apiUrl: config.apiUrl,
    },
    store: {
        history: {
            basename: '/',
        },
    },
    ...instances.store.getState().config,
};
// tslint:disable:no-any
Object.keys(instances).forEach((name: any) => {
    // @ts-ignore
    _merge(instances[name], customConfig[name] || {});
});
// tslint:enable:no-any
