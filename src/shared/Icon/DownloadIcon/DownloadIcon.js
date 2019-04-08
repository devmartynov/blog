import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('DownloadIcon');

export default class DownloadIcon extends React.PureComponent {

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
                    d='M17.435 10.734a.89.89 0 0 1-.139 1.25l-4.74 3.792a.894.894 0 0 1-1.112 0l-4.74-3.792a.89.89 0 0 1 1.111-1.389l3.296 2.637V4.89a.89.89 0 0 1 1.778 0v8.343l3.296-2.637a.893.893 0 0 1 1.25.139zm-1.88 7.488a.89.89 0 0 1 0 1.778h-7.11a.89.89 0 0 1 0-1.778h7.11z'
                />
            </svg>
        );
    }
}