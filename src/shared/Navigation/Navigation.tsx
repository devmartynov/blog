import React from 'react';

import { html } from 'components';
import Link from 'shared/Link/index';
import NavItemModel from 'models/NavItem';

const bem = html.bem('Navigation');

interface IntOwnProps {
    navItems: Array<NavItemModel>;
    className: string;
}

export default class Navigation extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <nav className={bem(bem.block(), this.props.className)}>
                <ul className={bem.element('list')}>
                    {this.props.navItems.map((item: NavItemModel) => (
                        <li
                            className={bem.element('item')}
                            key={item.id}
                        >
                            <Link
                                className={bem.element('link', { 'active': item.isActive })}
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
