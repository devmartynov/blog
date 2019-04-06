import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './ArticlePage.scss';

const bem = html.bem('ArticlePage');

export default class ArticlePage extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <article className={bem.block()}>
                1
            </article>
        );
    }

}