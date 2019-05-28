import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'react-router-redux';

import { html } from 'components';
import NavItemModel from 'models/NavItem';
import Link from 'shared/Link/index';
import { MouseClickEventModel } from 'models/MouseClickEvent';

const bem = html.bem('Menu');

interface IntOwnProps {
    navItems: Array<NavItemModel>;
    closeMenu(): void;
}

interface IntStateProps {
    dispatch: Dispatch;
}

type IntProps = IntOwnProps & IntStateProps;

class Menu extends React.PureComponent<IntProps> {

    // TODO: links as props component, add more functionality
    render() {
        return (
            <div className={bem.block()}>
                <ul className={bem.element('menu')}>
                    <li className={bem.element('menu-item')}>
                        <h3 className={bem.element('menu-label')}>
                            {__('Читай')}
                        </h3>
                        <ul>
                            {this.props.navItems.map((item: NavItemModel) => (
                                <li key={item.id}>
                                    <Link
                                        label={item.label}
                                        onClick={(e: MouseClickEventModel) => {
                                            e.preventDefault();
                                            this.props.closeMenu();
                                            this.props.dispatch(push(item.url));
                                        }}
                                        url={item.url}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={bem.element('menu-item')}>
                        <h3 className={bem.element('menu-label')}>
                            {__('Звони')}
                        </h3>
                        <ul>
                            <li>
                                <a href='tel:+79131716486'>
                                    +7 (913) 171-64-86
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={bem.element('menu-item')}>
                        <h3 className={bem.element('menu-label')}>
                            {__('Пиши')}
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href='https://vk.com/martynov_do'
                                    target='_blank'
                                >
                                    {__('Вконтакте')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://t.me/domartynov'
                                    target='_blank'
                                >
                                    {__('Телеграм')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.facebook.com/profile.php?id=100004142401177'
                                    target='_blank'
                                >
                                    {__('Фэйсбук')}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={bem.element('menu-item')}>
                        <h3 className={bem.element('menu-label')}>
                            {__('Подписывайся')}
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href='https://www.instagram.com/martynov.do'
                                    target='_blank'
                                >
                                    {__('Инстаграм')}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect()(Menu);