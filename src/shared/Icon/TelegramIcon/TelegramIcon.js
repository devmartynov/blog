import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('TelegramIcon');

export default class TelegramIcon extends React.PureComponent {

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
                    d='M10.268 14.58l6.823-5.965c.3-.258-.066-.383-.463-.15l-8.42 5.146-3.637-1.1c-.786-.232-.791-.755.176-1.131L18.92 6.086c.647-.285 1.272.15 1.025 1.11L17.53 18.214c-.168.783-.657.97-1.333.609l-3.677-2.631-1.767 1.664c-.206.194-.368.357-.736.357l.25-3.634z'
                />
            </svg>
        );
    }
}