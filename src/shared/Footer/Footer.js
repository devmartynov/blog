import React from 'react';

import {html} from 'components';
import Button from 'ui/form/Button';
import SocialNetworks from 'shared/SocialNetworks';
import Icon from 'shared/Icon';

import './Footer.scss';

const bem = html.bem('Footer');

export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('top')}>
                        <div className={bem.element('offer')}>
                            {__('Поделитесь своим опытом взаимодействия с сайтами')}
                        </div>
                        <Button
                            label={__('Поделиться')}
                            link
                            url='1221'
                        />
                    </div>
                    <div className={bem.element('bottom')}>
                        <div className={bem.element('copyrights')}>
                            <div className={bem.element('site-created-date')}>
                                {__('Сделано с {heart} в 2019 г.', {
                                    heart: <Icon
                                        className={bem.element('heart-icon')}
                                        name='heart'
                                        fill='#E53935'
                                    />
                                })}
                            </div>
                            <div className={bem.element('design')}>
                                {__('Дизайн')}&nbsp;
                                <a
                                    className={bem.element('design-link')}
                                    href='https://design.chulakov.ru/'
                                    target='_blank'
                                >
                                    Chulakov Design System
                                </a>
                            </div>
                        </div>
                        <div className={bem.element('socials')}>
                            <SocialNetworks color='white'/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}