import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components/index';

const bem = html.bem('MinusIcon');

export default class MinusIcon extends React.PureComponent {

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
                    d='M17.217 11H6.783C6.35 11 6 11.448 6 12s.35 1 .783 1h10.434c.432 0 .783-.448.783-1s-.35-1-.783-1'
                />
            </svg>
        );
    }
}