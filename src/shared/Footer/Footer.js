import React from 'react';

import {html} from 'components';
import Button from 'ui/form/Button';
import SocialNetworks from 'shared/SocialNetworks';

import './Footer.scss';

const bem = html.bem('Footer');

export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer className={bem.block()}>
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
                                heart: (
                                    <svg
                                        className={bem.element('heart-icon')}
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-label='с любовью'
                                    >
                                        <path
                                            d='M19.974 9.473C19.74 6.88 17.92 5 15.644 5c-1.518 0-2.907.823-3.688 2.143C11.18 5.806 9.849 5 8.356 5 6.08 5 4.26 6.88 4.027 9.473c-.018.114-.093.717.137 1.7.331 1.417 1.098 2.706 2.215 3.726L11.952 20l5.67-5.1c1.117-1.021 1.884-2.31 2.215-3.728.23-.982.155-1.585.137-1.7z'/>
                                    </svg>
                                )
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
            </footer>
        );
    }
}