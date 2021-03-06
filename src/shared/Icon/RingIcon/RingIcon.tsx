import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('RingIcon');

export default class RingIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M18.666 14.449c.734 0 1.334.585 1.334 1.306 0 .72-.598 1.306-1.337 1.306H5.337c-.739 0-1.337-.585-1.337-1.306 0-.72.597-1.306 1.334-1.306A.66.66 0 0 0 6 13.795V9.877C6 6.63 8.686 4 12 4s6 2.631 6 5.877v3.918c0 .364.298.654.666.654zm-9 3.265h4.667C14.333 18.977 13.29 20 12 20c-1.289 0-2.333-1.023-2.333-2.286z'
                />
            </svg>
        );
    }
}