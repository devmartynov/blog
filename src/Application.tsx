// TODO: migrate "yii-steroids" to typescript
// TODO: delete all "@ts-ignore" from project
// TODO: delete all "any" and rewrite "object" in project

import React from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import Router from 'yii-steroids/ui/nav/Router';

import { ui } from 'components';
import Layout from 'shared/Layout/index';
import routes from './routes';

import './style/index.scss';

// Import views
ui.addViews(require.context('./ui', true, /View.js$/));
ui.addViews({
    'form.FormView': require('yii-steroids/ui/form/Form/FormView').default,
    'form.ButtonView': require('ui/form/Button/ButtonView').default,
    'nav.NavTabsView': require('ui/nav/Nav/NavTabsView').default,
    'form.FieldLayoutView': require('ui/form/FieldLayout/FieldLayoutView').default,
    'list.ListView': require('ui/list/List/ListView').default,
});

@hot(module)
export default class Application extends React.PureComponent {

    render() {
        return (
            <Router
                wrapperView={Layout}
                routes={routes}
            />
        );
    }
}
