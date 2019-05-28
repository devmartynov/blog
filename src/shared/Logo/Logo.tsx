import React from 'react';

import { html } from 'components';
import Link from 'shared/Link/index';
import Icon from 'shared/Icon/index';
import RoutesEnum from 'enums/RoutesEnum';

const bem = html.bem('Logo');

interface IntOwnProps {
    className: string;
    title: string;
}

export default class Logo extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <Link
                className={bem(bem.block(), this.props.className)}
                pageId={RoutesEnum.MAIN}
                title={this.props.title}
            >
                <Icon
                    className={bem.element('icon')}
                    name='logo'
                />
            </Link>
        );
    }

}
