import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('FilterIcon');

export default class FilterIcon extends React.PureComponent {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.object,
        viewBox: PropTypes.string,
        className: PropTypes.string,
        fill: PropTypes.string,
    };

    static defaultProps = {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: '#000',
    };

    render() {
        return (
            <svg
                className={bem(bem.block(), this.props.className)}
                width={this.props.width}
                height={this.props.width}
                style={this.props.style}
                viewBox={this.props.viewBox}
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill={this.props.fill}
                    d='M5.766 7.717l4.331 4.21a1 1 0 0 1 .303.718v5.123a.943.943 0 0 0 1.6.676l1.297-1.26a1 1 0 0 0 .303-.718v-3.821a1 1 0 0 1 .303-.717l4.33-4.211A1 1 0 0 0 17.538 6H6.463a1 1 0 0 0-.697 1.717z'
                />
            </svg>
        );
    }
}