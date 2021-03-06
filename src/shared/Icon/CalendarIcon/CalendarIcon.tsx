import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('CalendarIcon');

export default class CalendarIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M5 6h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h2.191a.5.5 0 0 0 .447-.276l.586-1.171A1 1 0 0 1 10.618 6h2.764a1 1 0 0 1 .894.553l.586 1.17a.5.5 0 0 0 .447.277H17.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-2.882a1 1 0 0 1-.894-.553l-.586-1.17A.5.5 0 0 0 12.691 8h-1.382a.5.5 0 0 0-.447.276l-.586 1.171a1 1 0 0 1-.894.553H6.5zM9 11.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm4 0v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm4 0v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm-8-7V6a1 1 0 0 1-1 1h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm8 0v2a.5.5 0 0 1-.5.5H16a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                />
            </svg>
        );
    }
}