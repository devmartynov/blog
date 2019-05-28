import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('SmDownIcon');

export default class SmDownIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M5.538 5.355l3.505-4.207A.7.7 0 0 0 8.505 0h-7.01a.7.7 0 0 0-.538 1.148l3.505 4.207a.7.7 0 0 0 1.076 0z'
                />
            </svg>
        );
    }
}