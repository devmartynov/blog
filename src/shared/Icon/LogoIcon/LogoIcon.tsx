import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('LogoIcon');

export default class LogoIcon extends React.PureComponent<IntIconOwnProps> {

    static defaultProps = {
        width: 120,
        height: 28,
        viewBox: '0 0 171 40',
        fillBg: '#fff45f',
        fill: '#000',
    };

    render() {
        return (
            <svg
                className={bem(bem.block(), this.props.className)}
                width={this.props.width}
                height={this.props.height}
                style={this.props.style}
                viewBox={this.props.viewBox}
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill={this.props.fillBg}
                    d='M0 0h1260v295H0z'
                />
                <path
                    fill={this.props.fill}
                    d='M22.35,19.29,19.5,25.61H17l-2.86-6.31v9H9.46v-17h5.11l3.67,8,3.7-8H27v17H22.35Zm19.3-8.06,5.42,17H42.32l-1-3.34H36.75l-1,3.34H31l5.45-17ZM39,15.81l-1.58,6h3.1Zm12-4.58h7.82A6,6,0,0,1,62.12,22l3.6,6.26H60.58l-3-5.23h-1.9v5.23H51ZM58.64,19c.58,0,1.18-.67,1.18-1.82s-.72-1.82-1.3-1.82H55.69V19Zm19.22-3.65v13H73.18v-13H68.26V11.23h14.5v4.08Zm15.62,2.88,3.12-7h5.09l-5.88,11.4v5.64H91.16V22.58L85.37,11.23h5.06Zm16.68,10.08h-4.68v-17h3.65L116,19.89V11.23h4.68v17h-3.72l-6.77-8.38Zm23.71-17.14a8.64,8.64,0,1,1-8.71,8.59A8.64,8.64,0,0,1,133.88,11.13Zm3.84,8.59c0-2.3-1.27-4.44-3.91-4.44s-3.89,2.26-3.89,4.49,1.25,4.49,3.91,4.49S137.72,22,137.72,19.73Zm15.22,3.15,3.29-11.64h4.92l-5.88,17h-4.66l-6-17h4.94Z'
                />
            </svg>
        );
    }
}