import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('DocIcon');

export default class DocIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M7 4h6.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 18 8.828V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2.5v11a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V10h-3a1 1 0 0 1-1-1V6H8.5a.5.5 0 0 0-.5.5z'
                />
            </svg>
        );
    }
}