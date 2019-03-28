import React from 'react';

import {html} from 'components';

import './MainPage.scss';

const bem = html.bem('MainPage');

export default class MainPage extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <div className={bem.block()}>
                Это главная страница сайта
            </div>
        );
    }
}
