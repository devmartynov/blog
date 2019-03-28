import React from 'react';
import {hot} from 'react-hot-loader';
import Router from 'yii-steroids/ui/nav/Router';

import {ui} from 'components';
import Layout from './shared/Layout';
import routesTree from './routes';

import './style/index.scss';

// Import views
ui.addViews(require.context('./ui', true, /View.js$/));
ui.addViews({
    'form.FormView': require('yii-steroids/ui/form/Form/FormView').default,
});

@hot(module)
export default class Application extends React.PureComponent {

    static treeToList(item) {
        let items = [item];
        if (item.items) {
            item.items.forEach(sub => {
                items = items.concat(Application.treeToList(sub));
            });
        }
        return items;
    }

    render() {
        return (
            <Router
                wrapperView={Layout}
                routes={Application.treeToList(routesTree)}
            />
        );
    }

}
