import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('SkipIcon');

export default class SkipIcon extends React.PureComponent {

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
        fill: '#00B64A',
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
                    d='M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-3.5-8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7z'
                />
            </svg>
        );
    }
}