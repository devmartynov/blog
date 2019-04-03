import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Link from 'shared/Link';
import NavItemSchema from 'types/NavItemSchema';

import './HeaderNavigationView.scss';

const bem = html.bem('HeaderNavigationView');

export default class HeaderNavigationView extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        className: PropTypes.string,
    };

    render() {
        return (
            <nav className={bem(bem.block(), this.props.className)}>
                <ul className={bem.element('list')}>
                    {this.props.navItems.map(item => (
                        <li
                            className={bem.element('item')}
                            key={item.id}
                        >
                            <Link
                                className={bem.element('link', {'active': item.isActive})}
                                label={item.label}
                                url={item.url}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
