import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('PauseIcon');

export default class PauseIcon extends React.PureComponent<IntIconOwnProps> {

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
                <g
                    fill={this.props.fill}
                    fillRule='evenodd'
                >
                    <rect
                        x='7'
                        y='6'
                        width='3'
                        height='12'
                        rx='1'
                    />
                    <rect
                        x='14'
                        y='6'
                        width='3'
                        height='12'
                        rx='1'
                    />
                </g>
            </svg>
        );
    }
}