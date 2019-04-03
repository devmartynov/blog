import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

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
            <ul className={bem.block({ color: this.props.color })}>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://t.me/domartynov'
                        aria-label={__('Телеграм')}
                        target='_blank'
                    >
                        <svg
                            className={bem.element('icon')}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M10.268 14.58l6.823-5.965c.3-.258-.066-.383-.463-.15l-8.42 5.146-3.637-1.1c-.786-.232-.791-.755.176-1.131L18.92 6.086c.647-.285 1.272.15 1.025 1.11L17.53 18.214c-.168.783-.657.97-1.333.609l-3.677-2.631-1.767 1.664c-.206.194-.368.357-.736.357l.25-3.634z'/>
                        </svg>
                    </a>
                </li>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://vk.com/martynov_do'
                        aria-label={__('Вконтакте')}
                        target='_blank'
                    >
                        <svg
                            className={bem.element('icon')}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M12.785 16.962s.288-.031.436-.188c.136-.143.131-.414.131-.414s-.018-1.265.578-1.452c.586-.183 1.34 1.223 2.14 1.764.604.41 1.063.32 1.063.32l2.137-.03s1.117-.068.587-.934c-.043-.071-.309-.641-1.588-1.812-1.34-1.227-1.16-1.028.453-3.15.983-1.291 1.376-2.08 1.253-2.417-.117-.322-.84-.237-.84-.237l-2.405.015s-.179-.024-.311.054c-.13.076-.213.255-.213.255s-.38.999-.888 1.85c-1.072 1.792-1.5 1.887-1.675 1.776-.408-.26-.306-1.043-.306-1.6 0-1.738.268-2.462-.52-2.65-.262-.062-.454-.103-1.123-.11-.859-.009-1.585.003-1.997.201-.273.132-.485.427-.356.444.16.02.52.096.71.352.247.33.238 1.073.238 1.073s.142 2.046-.33 2.3c-.325.175-.77-.181-1.725-1.808a15.035 15.035 0 0 1-.858-1.755s-.072-.172-.2-.265a.993.993 0 0 0-.369-.146l-2.285.014s-.344.01-.47.157c-.112.13-.009.401-.009.401s1.79 4.129 3.817 6.21c1.859 1.907 3.968 1.782 3.968 1.782h.957z'/>
                        </svg>
                    </a>
                </li>
                <li className={bem.element('item')}>
                    <a
                        className={bem.element('link')}
                        href='https://www.instagram.com/martynov.do'
                        aria-label={__('Инстаграм')}
                        target='_blank'
                    >
                        <svg
                            className={bem.element('icon')}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M15.54 4H8.398A4.4 4.4 0 0 0 4 8.391v7.13a4.4 4.4 0 0 0 4.398 4.39h7.142a4.4 4.4 0 0 0 4.398-4.39V8.39A4.4 4.4 0 0 0 15.54 4zm2.984 11.52a2.985 2.985 0 0 1-2.984 2.98H8.398a2.985 2.985 0 0 1-2.984-2.98V8.392a2.985 2.985 0 0 1 2.984-2.98h7.142a2.985 2.985 0 0 1 2.984 2.98v7.13-.002zm-6.555-7.664a4.108 4.108 0 0 0-4.107 4.1 4.108 4.108 0 0 0 8.214 0c0-2.26-1.843-4.1-4.107-4.1zm0 6.788a2.693 2.693 0 0 1-2.693-2.688 2.694 2.694 0 0 1 5.386 0 2.693 2.693 0 0 1-2.693 2.688zm4.279-7.985a1.04 1.04 0 0 0-1.037 1.035 1.042 1.042 0 0 0 1.037 1.036 1.037 1.037 0 0 0 1.037-1.036 1.039 1.039 0 0 0-1.037-1.035z'/>
                        </svg>
                    </a>
                </li>
            </ul>
        );
    }
}