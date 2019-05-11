import React from 'react';
import { Requireable, ReactNodeLike } from 'prop-types';

import { html } from 'components';
import Link from 'shared/Link';
import NavItemModel from 'models/NavItem';

const bem = html.bem('NavTabsView');

interface IntOwnProps {
    items: Array<NavItemModel>;
    className: string;
    onClick: (item: NavItemModel, index: number) => void;
    children: Requireable<ReactNodeLike>;
}

export default class NavTabsView extends React.Component<IntOwnProps> {

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                <ul className={bem.element('items')}>
                    {this.props.items.map((item: NavItemModel, index: number) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <Link
                                className={bem.element('link', { active: item.isActive })}
                                href={item.url}
                                onClick={(e: Event) => {
                                    e.preventDefault();
                                    this.props.onClick(item, index);
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={bem.element('content')}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}