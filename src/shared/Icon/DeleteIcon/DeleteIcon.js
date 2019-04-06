import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('DeleteIcon');

export default class DeleteIcon extends React.PureComponent {

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
                    d='M13.237 12l3.507-3.507a.874.874 0 1 0-1.238-1.237l-3.507 3.505-3.505-3.505a.875.875 0 0 0-1.238 1.237L10.763 12l-3.507 3.507a.874.874 0 1 0 1.238 1.236L12 13.237l3.507 3.505a.87.87 0 0 0 1.238 0 .874.874 0 0 0 0-1.236l-3.507-3.507z'
                />
            </svg>
        );
    }
}