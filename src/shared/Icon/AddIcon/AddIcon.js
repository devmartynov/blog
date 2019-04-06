import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('AddIcon');

export default class AddIcon extends React.PureComponent {

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
                    d='M12.783 11.217V6.783a.783.783 0 0 0-1.566 0v4.434H6.783a.783.783 0 0 0 0 1.566h4.434v4.434a.783.783 0 0 0 1.566 0v-4.434h4.434a.783.783 0 0 0 0-1.566h-4.434z'
                />
            </svg>
        );
    }
}