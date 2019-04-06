import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('VkIcon');

export default class VkIcon extends React.PureComponent {

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
                    d='M12.785 16.962s.288-.031.436-.188c.136-.143.131-.414.131-.414s-.018-1.265.578-1.452c.586-.183 1.34 1.223 2.14 1.764.604.41 1.063.32 1.063.32l2.137-.03s1.117-.068.587-.934c-.043-.071-.309-.641-1.588-1.812-1.34-1.227-1.16-1.028.453-3.15.983-1.291 1.376-2.08 1.253-2.417-.117-.322-.84-.237-.84-.237l-2.405.015s-.179-.024-.311.054c-.13.076-.213.255-.213.255s-.38.999-.888 1.85c-1.072 1.792-1.5 1.887-1.675 1.776-.408-.26-.306-1.043-.306-1.6 0-1.738.268-2.462-.52-2.65-.262-.062-.454-.103-1.123-.11-.859-.009-1.585.003-1.997.201-.273.132-.485.427-.356.444.16.02.52.096.71.352.247.33.238 1.073.238 1.073s.142 2.046-.33 2.3c-.325.175-.77-.181-1.725-1.808a15.035 15.035 0 0 1-.858-1.755s-.072-.172-.2-.265a.993.993 0 0 0-.369-.146l-2.285.014s-.344.01-.47.157c-.112.13-.009.401-.009.401s1.79 4.129 3.817 6.21c1.859 1.907 3.968 1.782 3.968 1.782h.957z'
                />
            </svg>
        );
    }
}