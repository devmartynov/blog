import React from 'react';
// @ts-ignore
import Link from 'yii-steroids/ui/nav/Link';

import { html } from 'components';
import Icon from 'shared/Icon/index';
import { ROUTE_ROOT } from '../../routes';

const bem = html.bem('Logo');

interface IntOwnProps {
    className: string;
}

export default class Logo extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <Link
                className={bem(bem.block(), this.props.className)}
                toRoute={ROUTE_ROOT}
                isLinkView
            >
                <Icon
                    className={bem.element('icon')}
                    name='logo'
                />
            </Link>
        );
    }

}
