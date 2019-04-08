import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('ZoomIcon');

export default class ZoomIcon extends React.PureComponent {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.object,
        viewBox: PropTypes.string,
        className: PropTypes.string,
        fill: PropTypes.string,
    };

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
                    d='M7.753 13.411a4.005 4.005 0 0 1 0-5.659 3.985 3.985 0 0 1 2.83-1.17c1.024 0 2.049.39 2.829 1.17a4.005 4.005 0 0 1 0 5.66 4.006 4.006 0 0 1-5.66 0m11.017 4.237l-3.735-3.734c1.637-2.187 1.484-5.296-.503-7.283a5.594 5.594 0 0 0-7.898 0 5.593 5.593 0 0 0 0 7.9 5.57 5.57 0 0 0 3.95 1.632 5.567 5.567 0 0 0 3.332-1.13l3.734 3.734a.788.788 0 0 0 1.12 0 .792.792 0 0 0 0-1.119'
                />
            </svg>
        );
    }
}