// TODO: delete all "@ts-ignore" and "tslint:disable" from project

import RoutesTreeModel from 'models/RoutesTree';
import RouteModel from 'models/Route';
import ModalModel from 'models/Modal';
import MetaModel from 'models/Meta';
import NotificationModel from 'models/Notification';
import LocationModel from 'models/Location';

// tslint:disable:no-any

export interface IntFieldsState {
    props: {
        [propsKey: string]: {
            [propsInnerKey: string]: any,
        }
    };
    security: object;
    meta: MetaModel | null;

    [key: string]: any;
}

export interface IntListState {
    [listKey: string]: any;
}

export interface IntConfigState {
    [configKey: string]: any;

}

// tslint:enable:no-any

export interface IntNotificationsState {
    items: Array<NotificationModel>;
}

export interface IntModalState {
    opened: {
        [key: string]: ModalModel,
    };
}

export interface IntRoutingState {
    location: null | LocationModel;
    action: null | string;
    routes: Array<RouteModel>;
}

export interface IntNavigationState {
    routesTree: null | RoutesTreeModel;
    params: {
        [key: string]: string | number | null | undefined | object,
    };
}