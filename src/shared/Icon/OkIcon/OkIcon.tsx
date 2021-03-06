import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('OkIcon');

export default class OkIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M11.989 12.257c-2.457 0-4.456-1.852-4.456-4.128C7.533 5.852 9.532 4 11.99 4c2.457 0 4.455 1.852 4.455 4.13 0 2.275-1.998 4.127-4.455 4.127zm0-5.837c-1.017 0-1.845.766-1.845 1.71 0 .941.828 1.708 1.845 1.708s1.844-.767 1.844-1.709c0-.943-.827-1.71-1.844-1.71zm1.814 9.207l2.49 2.308c.51.472.51 1.238 0 1.71a1.378 1.378 0 0 1-1.845 0L12 17.378l-2.447 2.269c-.255.236-.59.354-.924.354-.334 0-.667-.118-.923-.354a1.148 1.148 0 0 1 0-1.71l2.49-2.31a8.737 8.737 0 0 1-2.586-.992c-.61-.356-.793-1.103-.41-1.668.384-.566 1.19-.737 1.8-.38 1.824 1.063 4.174 1.063 6 0 .61-.357 1.415-.186 1.8.38.383.565.2 1.312-.41 1.668a8.724 8.724 0 0 1-2.587.993z'
                />
            </svg>
        );
    }
}