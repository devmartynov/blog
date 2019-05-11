import React from 'react';
import { RouteComponentProps } from 'react-router';

export default interface RoutesTreeModel {
    id: string;
    label: string;
    title: string;
    layout?: string;
    path?: string | Array<string>;
    exact?: boolean;
    // tslint:disable:no-any
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    // tslint:enable:no-any
    componentProps?: {
        [key: string]: string,
    };
    items?: Array<RoutesTreeModel>;
}