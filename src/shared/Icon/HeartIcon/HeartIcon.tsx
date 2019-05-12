import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('HeartIcon');

export default class HeartIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M19.974 9.473C19.74 6.88 17.92 5 15.644 5c-1.518 0-2.907.823-3.688 2.143C11.18 5.806 9.849 5 8.356 5 6.08 5 4.26 6.88 4.027 9.473c-.018.114-.093.717.137 1.7.331 1.417 1.098 2.706 2.215 3.726L11.952 20l5.67-5.1c1.117-1.021 1.884-2.31 2.215-3.728.23-.982.155-1.585.137-1.7z'
                />
            </svg>
        );
    }
}