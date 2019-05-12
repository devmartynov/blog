import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('FileIcon');

export default class FileIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M5.928 9.71l5.368-5.367a4.596 4.596 0 0 1 6.444-.048c1.851 1.784 1.797 4.812-.018 6.619l-5.386 5.385a2.756 2.756 0 0 1-3.99-.1 2.806 2.806 0 0 1 .14-3.857l4.76-4.756a.925.925 0 1 1 1.296 1.295L9.73 13.693a.925.925 0 0 0 .068 1.36.946.946 0 0 0 1.259-.09l5.434-5.428a2.756 2.756 0 0 0-.1-3.99 2.806 2.806 0 0 0-3.85.151l-5.404 5.405a4.596 4.596 0 0 0-.056 6.433c1.785 1.85 4.813 1.797 6.62-.019l4.739-4.738a.925.925 0 0 1 1.295 0 .925.925 0 0 1 0 1.296l-4.812 4.812a6.433 6.433 0 0 1-9.008.078c-2.583-2.495-2.528-6.71.013-9.252z'
                />
            </svg>
        );
    }
}