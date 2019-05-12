import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('ArrowRightIcon');

export default class ArrowRightIcon extends React.PureComponent<IntIconOwnProps> {

    static defaultProps = {
        width: 34,
        height: 20,
        viewBox: '0 0 34 20',
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
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g
                    stroke='none'
                    strokeWidth='1'
                    fillRule='evenodd'
                    fill={this.props.fill}
                >
                    <g fillRule='nonzero'>
                        <g transform='translate(3.000000, 2.500000)'>
                            <polygon points='0.5 8.5 0.5 6.5 25.9093998 6.5 25.9093998 8.5'/>
                            <polygon
                                points='18.34797 2.25819316 19.65203 0.741806838 27.5293056 7.51609642 19.6557452 14.3547335 18.3442548 12.844769 24.4706944 7.52360606'/>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}