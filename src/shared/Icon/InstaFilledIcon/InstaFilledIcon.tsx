import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('InstaFilledIcon');

export default class InstaFilledIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M15.54 4a4.4 4.4 0 0 1 4.398 4.39v7.131a4.4 4.4 0 0 1-4.398 4.39H8.398A4.4 4.4 0 0 1 4 15.521v-7.13A4.4 4.4 0 0 1 8.398 4h7.142zm-3.571 3.856a4.108 4.108 0 0 0-4.107 4.1 4.108 4.108 0 0 0 8.214 0c0-2.26-1.843-4.1-4.107-4.1zm0 6.788a2.693 2.693 0 0 1-2.693-2.688 2.694 2.694 0 0 1 5.386 0 2.693 2.693 0 0 1-2.693 2.688zm4.279-7.985a1.04 1.04 0 0 0-1.037 1.035 1.042 1.042 0 0 0 1.037 1.036 1.037 1.037 0 0 0 1.037-1.036 1.039 1.039 0 0 0-1.037-1.035z'
                />
            </svg>
        );
    }
}