// TODO: migrate "yii-steroids" to typescript
// TODO: delete all "@ts-ignore" from project
// TODO: delete all "any" and rewrite "object" in project

import React from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import Router from 'yii-steroids/ui/nav/Router';

import { ui } from 'components';
import Layout from 'shared/Layout';
import ErrorBoundary from 'shared/ErrorBoundary';
import routesTree from './routes/index';
import RoutesTreeModel from 'models/RoutesTree';

import './style/index.scss';

// Import views
ui.addViews(require.context('./ui', true, /View.js$/));
ui.addViews({
    'form.FormView': require('yii-steroids/ui/form/Form/FormView').default,
    'form.ButtonView': require('ui/form/Button/ButtonView').default,
    'nav.NavTabsView': require('ui/nav/Nav/NavTabsView').default,
    'form.FieldLayoutView': require('ui/form/FieldLayout/FieldLayoutView').default,
});

@hot(module)
export default class Application extends React.PureComponent {

    // TODO: fix routes={Application.treeToList(routesTree)} error
    static treeToList(item: RoutesTreeModel) {
        let items = [item];
        if (item.items) {
            item.items.forEach((sub: RoutesTreeModel) => {
                items = items.concat(Application.treeToList(sub));
            });
        }
        return items;
    }

    render() {
        return (
            <ErrorBoundary>
                <Router
                    wrapperView={Layout}
                    // @ts-ignore
                    routes={Application.treeToList(routesTree)}
                />
            </ErrorBoundary>
        );
    }
}
