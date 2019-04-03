import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './ArticlesPage.scss';

const bem = html.bem('ArticlesPage');

export default class ArticlesPage extends React.PureComponent {

    static propTypes = {};

    render() {
        return (
            <div className={bem.block()}>
                ArticlesPage
            </div>
        );
    }

}
