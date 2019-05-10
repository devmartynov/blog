import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {html} from 'components';

import './PostPage.scss';

// static data
import {articlesDev} from 'static/data/articles';

const bem = html.bem('PostPage');

//TODO: http request to get post by {id}
export default class PostPage extends React.PureComponent {

    //TODO: delete any
    static propTypes = {
        data: PropTypes.any
    };

    render() {
        console.log(this.props);
        return (
            <section className={bem.block()}>
                1
            </section>
        );
    }

}