import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('InstaIcon');

export default class InstaIcon extends React.PureComponent {

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
                    d='M15.54 4H8.398A4.4 4.4 0 0 0 4 8.391v7.13a4.4 4.4 0 0 0 4.398 4.39h7.142a4.4 4.4 0 0 0 4.398-4.39V8.39A4.4 4.4 0 0 0 15.54 4zm2.984 11.52a2.985 2.985 0 0 1-2.984 2.98H8.398a2.985 2.985 0 0 1-2.984-2.98V8.392a2.985 2.985 0 0 1 2.984-2.98h7.142a2.985 2.985 0 0 1 2.984 2.98v7.13-.002zm-6.555-7.664a4.108 4.108 0 0 0-4.107 4.1 4.108 4.108 0 0 0 8.214 0c0-2.26-1.843-4.1-4.107-4.1zm0 6.788a2.693 2.693 0 0 1-2.693-2.688 2.694 2.694 0 0 1 5.386 0 2.693 2.693 0 0 1-2.693 2.688zm4.279-7.985a1.04 1.04 0 0 0-1.037 1.035 1.042 1.042 0 0 0 1.037 1.036 1.037 1.037 0 0 0 1.037-1.036 1.039 1.039 0 0 0-1.037-1.035z'
                />
            </svg>
        );
    }
}