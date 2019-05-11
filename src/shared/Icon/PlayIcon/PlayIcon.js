import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components/index';

const bem = html.bem('PlayIcon');

export default class PlayIcon extends React.PureComponent {

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
                    d='M18.559 11.26L8.273 5.608a.855.855 0 0 0-.85.01.847.847 0 0 0-.423.73v11.304a.848.848 0 0 0 .857.848.862.862 0 0 0 .416-.106l10.286-5.652a.844.844 0 0 0 0-1.482z'
                />
            </svg>
        );
    }
}