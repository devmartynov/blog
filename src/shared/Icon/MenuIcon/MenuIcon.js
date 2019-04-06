import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('MenuIcon');

export default class MenuIcon extends React.PureComponent {

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
                    d='M1 4h22a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 7h22a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0 7h22a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z'
                />
            </svg>
        );
    }
}