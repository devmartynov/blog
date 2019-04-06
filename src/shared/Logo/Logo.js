import React from 'react';

import { html } from 'components';
import Link from 'shared/Link';
import Icon from 'shared/Icon';
import RoutesEnum from 'enums/RoutesEnum';

import './Logo.scss';

const bem = html.bem('Logo');

export default class Logo extends React.PureComponent {

    render() {
        return (
            <Link
                className={bem.block()}
                pageId={RoutesEnum.MAIN}
            >
                <Icon
                    className={bem.element('icon')}
                    name='logo'
                />
            </Link>
        );
    }

}
