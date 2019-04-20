import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './PostPage.scss';

const bem = html.bem('PostPage');

export default class PostPage extends React.PureComponent {

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