import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('ShareIcon');

export default class ShareIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M13.263 13.298a.75.75 0 0 1 .487.702v1.295l4.14-3.795-4.14-3.795V9a.75.75 0 0 1-.75.75c-2.909 0-4.798 1.33-5.742 4.114 1.793-1.19 3.816-1.387 6.005-.566zm-6.694 3.19c-.488.57-1.418.149-1.311-.594.674-4.724 3.045-7.33 6.992-7.617V6a.75.75 0 0 1 1.257-.553l6 5.5a.75.75 0 0 1 0 1.106l-6 5.5A.75.75 0 0 1 12.25 17v-2.461c-2.154-.636-4.005-.005-5.68 1.95z'
                />
            </svg>
        );
    }
}