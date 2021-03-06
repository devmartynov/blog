import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('StopIcon');

export default class StopIcon extends React.PureComponent<IntIconOwnProps> {

    static defaultProps = {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: '#E53935',
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
                    d='M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm1.768-7.353l1.414-1.414a.5.5 0 0 0 0-.707l-.707-.709a.5.5 0 0 0-.708 0l-1.413 1.416a.5.5 0 0 1-.707 0l-1.414-1.415a.5.5 0 0 0-.707 0l-.709.708a.5.5 0 0 0 0 .708l1.415 1.412a.5.5 0 0 1 0 .708l-1.414 1.413a.5.5 0 0 0 0 .707l.707.709a.5.5 0 0 0 .707 0l1.414-1.416a.5.5 0 0 1 .707 0l1.414 1.415a.5.5 0 0 0 .707 0l.709-.707a.5.5 0 0 0 0-.707l-1.416-1.414a.5.5 0 0 1 0-.707z'
                />
            </svg>
        );
    }
}