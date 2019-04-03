import React from 'react';

import { html } from 'components';

import './ArticlesPage.scss';

const bem = html.bem('ArticlesPage');

export default class ArticlesPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                ArticlesPage
            </div>
        );
    }

}
