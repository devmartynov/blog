import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getNavUrl } from 'yii-steroids/reducers/navigation';

import { onLinkClick } from './utils';

@connect(
    (state, props) => ({
        url: props.url || getNavUrl(state, props.pageId, props.params),
    })
)
export default class Link extends React.PureComponent {

    static propTypes = {
        label: PropTypes.string,
        title: PropTypes.string,
        pageId: PropTypes.string,
        url: PropTypes.string,
        params: PropTypes.object,
        onClick: PropTypes.func,
    };

    render() {
        return (
            <a
                className={this.props.className}
                href={this.props.url}
                title={this.props.title}
                onClick={e => this._onClick(e)}
            >
                {this.props.label || this.props.children}
            </a>
        );
    }

    _onClick(e) {
        if (this.props.onClick) {
            return this.props.onClick(e);
        }

        return onLinkClick(e, this.props.url);
    }

}
