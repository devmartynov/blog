import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Link from 'shared/Link';
import Icon from 'shared/Icon';
import RoutesEnum from 'enums/RoutesEnum';

import './Logo.scss';

const bem = html.bem('Logo');

export default class Logo extends React.PureComponent {

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
    };

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
