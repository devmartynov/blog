import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('SettingsIcon');

export default class SettingsIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M12 14.936c-1.656 0-3-1.315-3-2.936s1.344-2.936 3-2.936 3 1.315 3 2.936-1.344 2.936-3 2.936zm5.41-5.149a1.072 1.072 0 0 1-.748-1.266l.61-2.582L14.727 4.5l-1.982 1.809a1.113 1.113 0 0 1-1.492 0L9.272 4.5 6.73 5.939l.609 2.582a1.072 1.072 0 0 1-.747 1.266L4 10.563v2.877l2.59.775c.55.165.876.717.748 1.266l-.61 2.582c1.312.743 1.233.698 2.544 1.438l1.982-1.808a1.11 1.11 0 0 1 1.492 0l1.982 1.808c1.31-.74 1.232-.695 2.543-1.438l-.609-2.582a1.072 1.072 0 0 1 .747-1.266L20 13.439v-2.877l-2.59-.774z'
                />
            </svg>
        );
    }
}