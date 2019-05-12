import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('ReloadIcon');

export default class ReloadIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M17.197 9a6 6 0 1 0 .461 5l.058-.233a1 1 0 0 1 .972-.767h.242a.836.836 0 0 1 .82 1c-.89 3.45-4.022 6-7.75 6a8 8 0 1 1 6-13.292V5a1 1 0 0 1 2 0v5a.997.997 0 0 1-1 1h-5a1 1 0 0 1 0-2h3.197z'
                />
            </svg>
        );
    }
}