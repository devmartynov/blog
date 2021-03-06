import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('UploadIcon');

export default class UploadIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M17.46 8.108a.917.917 0 0 1-1.144 1.431l-3.398-2.718v8.598a.916.916 0 0 1-1.832 0V6.821L7.689 9.539a.918.918 0 0 1-1.146-1.431L11.43 4.2a.916.916 0 0 1 1.144 0l4.886 3.907zm-1.794 10.06a.916.916 0 0 1 0 1.832H8.338a.916.916 0 0 1 0-1.832h7.328z'
                />
            </svg>
        );
    }
}