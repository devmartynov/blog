import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('OkayIcon');

export default class OkayIcon extends React.PureComponent<IntIconOwnProps> {

    static defaultProps = {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: '#00B64A',
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
                    d='M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-3.222-7.417l-.555.833a.5.5 0 0 0 .138.693l2.584 1.723a1 1 0 0 0 1.336-.207l3.688-4.61a.5.5 0 0 0-.079-.703l-.78-.624a.5.5 0 0 0-.703.078l-2.825 3.53a.5.5 0 0 1-.667.105l-1.445-.958a.5.5 0 0 0-.692.14z'
                />
            </svg>
        );
    }
}