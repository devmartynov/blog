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
                onClick={e => {
                    onLinkClick(e, this.props.url);
                    this.props.onClick && this.props.onClick(e);
                }}
            >
                {this.props.label || this.props.children}
            </a>
        );
    }

}
