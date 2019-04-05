import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Icon from 'shared/Icon';

import './SocialNetworks.scss';

const bem = html.bem('SocialNetworks');

export default class SocialNetworks extends React.PureComponent {

    static propTypes = {
        color: PropTypes.oneOf(['white', 'black']),
    };

    static defaultProps = {
        color: 'black',
    };

    render() {
        return (
            <ul className={bem.block()}>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://t.me/domartynov'
                        aria-label={__('Телеграм')}
                        target='_blank'
                    >
                        <Icon
                            className={bem.element('icon')}
                            fill={this.props.color === 'white' && '#fff'}
                            name='telegram'
                        />
                    </a>
                </li>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://vk.com/martynov_do'
                        aria-label={__('Вконтакте')}
                        target='_blank'
                    >
                        <Icon
                            className={bem.element('icon')}
                            fill={this.props.color === 'white' && '#fff'}
                            name='vk'
                        />
                    </a>
                </li>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://www.instagram.com/martynov.do'
                        aria-label={__('Инстаграм')}
                        target='_blank'
                    >
                        <Icon
                            className={bem.element('icon')}
                            fill={this.props.color === 'white' && '#fff'}
                            name='insta'
                        />
                    </a>
                </li>
            </ul>
        );
    }
}