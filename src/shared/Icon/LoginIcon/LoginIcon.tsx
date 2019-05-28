import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('LoginIcon');

export default class LoginIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M8 9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v1.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5V8a1 1 0 0 1-1 1zm4.097 3.997H4a1 1 0 1 1 0-2h8.09L10.972 9.88a1 1 0 0 1 1.414-1.414l2.829 2.828a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 1 1-1.414-1.414l1.125-1.125z'
                />
            </svg>
        );
    }
}