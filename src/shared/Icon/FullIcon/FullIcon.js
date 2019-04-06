import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('FullIcon');

export default class FullIcon extends React.PureComponent {

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
                    d='M5 4h4a1 1 0 1 1 0 2H6.5a.5.5 0 0 0-.5.5V9a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zM5 20h4a1 1 0 0 0 0-2H6.5a.5.5 0 0 1-.5-.5V15a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM19 4h-4a1 1 0 0 0 0 2h2.5a.5.5 0 0 1 .5.5V9a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zM19 20h-4a1 1 0 0 1 0-2h2.5a.5.5 0 0 0 .5-.5V15a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z'
                />
            </svg>
        );
    }
}