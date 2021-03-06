import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('StarIcon');

export default class StarIcon extends React.PureComponent<IntIconOwnProps> {

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
                    d='M16.302 12.958a2.392 2.392 0 0 0-.7 2.062l.367 2.541a.598.598 0 0 1-.246.588.556.556 0 0 1-.62.032l-2.178-1.245a2.213 2.213 0 0 0-2.119-.048l-2.23 1.144a.56.56 0 0 1-.618-.06.6.6 0 0 1-.22-.599l.475-2.52a2.397 2.397 0 0 0-.61-2.092l-1.744-1.83a.607.607 0 0 1-.136-.628.578.578 0 0 1 .483-.402l2.471-.313a2.275 2.275 0 0 0 1.741-1.245l1.151-2.275c.153-.303.404-.34.537-.328a.57.57 0 0 1 .519.35l1.052 2.328a2.29 2.29 0 0 0 1.687 1.322l2.456.426a.585.585 0 0 1 .466.423c.03.11.079.387-.163.619l-1.82 1.75zm2.973-.476c.638-.614.878-1.53.627-2.394-.25-.862-.943-1.49-1.803-1.638l-2.456-.426a.598.598 0 0 1-.437-.341l-1.05-2.329A2.265 2.265 0 0 0 12.142 4a2.278 2.278 0 0 0-2.07 1.262l-1.15 2.276a.593.593 0 0 1-.451.322l-2.47.315A2.273 2.273 0 0 0 4.13 9.727c-.289.85-.089 1.776.522 2.422l1.746 1.832a.62.62 0 0 1 .157.54l-.475 2.52c-.165.883.162 1.77.858 2.316a2.208 2.208 0 0 0 2.391.233l2.23-1.145a.566.566 0 0 1 .547.013l2.179 1.245c.347.198.727.297 1.104.297.453 0 .904-.142 1.296-.421a2.358 2.358 0 0 0 .954-2.274l-.367-2.54a.618.618 0 0 1 .182-.533l1.821-1.75z'
                />
            </svg>
        );
    }
}