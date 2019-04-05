import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('ArrowUpIcon');

export default class ArrowUpIcon extends React.PureComponent {

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
                    d='M17.77 14.056L12.555 8.84a.783.783 0 0 0-1.108 0L6.23 14.056a.783.783 0 1 0 1.107 1.108l4.665-4.665 4.663 4.665a.782.782 0 0 0 1.107-1.108'
                />
            </svg>
        );
    }
}