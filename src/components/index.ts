import _merge from 'lodash-es/merge';
// @ts-ignore
import ClientStorageComponent from 'yii-steroids/components/ClientStorageComponent';
// @ts-ignore
import HttpComponent from 'yii-steroids/components/HttpComponent';
// @ts-ignore
import HtmlComponent from 'yii-steroids/components/HtmlComponent';
// @ts-ignore
import LocaleComponent from 'yii-steroids/components/LocaleComponent';
// @ts-ignore
import ResourceComponent from 'yii-steroids/components/ResourceComponent';
// @ts-ignore
import StoreComponent from 'yii-steroids/components/StoreComponent';
// @ts-ignore
import UiComponent from 'yii-steroids/components/UiComponent';

const clientStorage = new ClientStorageComponent();
const http = new HttpComponent();
const html = new HtmlComponent();
const locale = new LocaleComponent();
const resource = new ResourceComponent();
const store = new StoreComponent();
const ui = new UiComponent();

// @ts-ignore
const customConfig = store.getState().config || {};
_merge(clientStorage, customConfig.clientStorage);
_merge(http, customConfig.http);
_merge(html, customConfig.html);
_merge(locale, customConfig.locale);
_merge(resource, customConfig.resource);
_merge(store, customConfig.store);
_merge(ui, customConfig.ui);

export {
    clientStorage,
    http,
    html,
    locale,
    resource,
    store,
    ui,
};
