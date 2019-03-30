import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Modal from 'ui/modal/Modal';
import NavItemSchema from 'types/NavItemSchema';
import Link from 'shared/Link';

import './HeaderMenuModal.scss';

const bem = html.bem('HeaderMenuModal');

export default class HeaderMenuModal extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
    };

    render() {
        return (
            <Modal
                className={bem.block()}
                overlay={bem.element('overlay')}
            >
                <ul className={bem.element('menu')}>
                    <li className={bem.element('menu-item')}>
                        <h3 className={bem.element('menu-label')}>
                            {__('Читай')}
                        </h3>
                        <ul>
                            {this.props.navItems.map(item => (
                                <li key={item.id}>
                                    <Link
                                        label={item.label}
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
                                    +7 (913) 171 64 86
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
                                <a href='https://vk.com/martynov_do'>
                                    {__('Вконтакте')}
                                </a>
                            </li>
                            <li>
                                <a href='https://t.me/domartynov'>
                                    {__('Телеграм')}
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/profile.php?id=100004142401177'>
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
                                <a href='https://www.instagram.com/martynov.do'>
                                    {__('Инстаграм')}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Modal>
        );
    }
}