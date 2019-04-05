import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('LogoIcon');

export default class LogoIcon extends React.PureComponent {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.object,
        viewBox: PropTypes.string,
        className: PropTypes.string,
        fillBg: PropTypes.string,
        fill: PropTypes.string,
    };

    static defaultProps = {
        width: 120,
        height: 28,
        viewBox: '0 0 1260 295',
        fillBg: '#fff45f',
        fill: '#000'
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
                    d='M196.77 162.42H161.6c-.3 5.66-2.91 10.96-7.23 14.69s-9.99 5.56-15.71 5.09c-16.89 0-26.37-12.36-26.37-34.2v-1.32c0-22.01 10.01-34.2 25.89-34.2 5.37-.42 10.68 1.41 14.61 5.05 3.94 3.64 6.14 8.75 6.08 14.07h36.37c-2.93-31.988-25.17-46.529-57.23-46.529-16.86-.815-33.28 5.415-45.256 17.169-11.976 11.75-18.4 27.94-17.703 44.6v1.35c0 37.09 21.205 61.8 64.319 61.8 31.89 0 54.99-16.29 57.4-47.57zm67.75 45.53v-47.69h40.52v47.69h35.3V86.92l-35.3.001v46.219h-40.53V86.921H229v120.99l35.52.04zm224.41-49.59V86.921h-35.7v69.919c0 18.11-4.7 25.89-19.31 25.89-15 0-19.31-8.29-19.31-25.39V86.921h-35.3v71.939c-.02 33.86 19.79 51.13 54.63 51.13 33.97 0 54.99-16.43 54.99-51.63zm120.89 49.59v-26.91h-46.55V86.921h-35.52v120.99l82.07.04zm84.72-92.92l13.45 46.53h-27.06l13.61-46.53zm-60.01 92.93h32.95l6.55-22.51h40.86l6.55 22.51h37.41L719.72 86.98l-45.69-.001-39.5 120.98zm187.89 0v-50.61l35.52 50.61h40.85l-47.51-64.84 45.16-56.199h-36.93l-37.06 47.909V86.921h-35.5v120.99l35.47.05zm220.98-60.59v-1.36c0-37.58-27.7-60.776-65.3-60.776-17.09-1.016-33.83 5.058-46.2 16.756-12.37 11.71-19.24 27.98-18.96 44.9v1.35c.02 36.35 24.84 61.75 64.67 61.75 39.79.01 65.79-25.39 65.79-62.62zm-93.61.67v-1.36c0-22.01 10.86-34.36 28.24-34.36s28.47 12.69 28.47 34.2v1.35c.1 21.66-10.79 34.86-28.21 34.86-17.12.01-28.5-12.68-28.5-34.69zm152.01 59.92h40.1l40.4-120.98-33.1-.001L1124 171.9l-25-84.921h-38l40.8 120.98z'
                />
            </svg>
        );
    }
}