import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('LogoutIcon');

export default class LogoutIcon extends React.PureComponent {

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
                    d='M14 9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v1.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V8a1 1 0 0 0 1 1z'
                />
                <path
                    fill={this.props.fill}
                    d='M17.097 12.825H10a1 1 0 1 1 0-2h7.09l-1.118-1.118a1 1 0 0 1 1.414-1.414l2.829 2.828a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 1 1-1.414-1.414l1.125-1.125z'
                />
            </svg>
        );
    }
}