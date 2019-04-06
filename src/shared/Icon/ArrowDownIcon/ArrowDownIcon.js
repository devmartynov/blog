import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('ArrowDownIcon');

export default class ArrowDownIcon extends React.PureComponent {

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
                    d='M17.77 8.84a.783.783 0 0 0-1.106 0L12 13.502 7.336 8.84A.783.783 0 1 0 6.23 9.946l5.217 5.218a.782.782 0 0 0 1.108 0l5.217-5.218a.783.783 0 0 0 0-1.107'
                />
            </svg>
        );
    }
}