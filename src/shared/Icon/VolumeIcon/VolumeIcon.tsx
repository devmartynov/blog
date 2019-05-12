import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('VolumeIcon');

export default class VolumeIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M13.17 13.816a1.817 1.817 0 0 0 0-3.632m5 1.815c0-2.757-2.243-4.999-5-4.999v1.523A3.48 3.48 0 0 1 16.646 12a3.48 3.48 0 0 1-3.476 3.478V17c2.757 0 5-2.243 5-5m-7.68 4.515L7.747 13.9a.534.534 0 0 0-.316-.133H6.338c-.278 0-.508-.272-.508-.606v-2.323c0-.333.23-.606.508-.606h1.094a.54.54 0 0 0 .316-.132l2.741-2.615c.455-.432.826-.22.826.473v8.083c0 .693-.37.906-.826.474'
                />
            </svg>
        );
    }
}