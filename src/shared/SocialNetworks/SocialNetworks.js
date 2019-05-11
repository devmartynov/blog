import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Icon from 'shared/Icon';
import SocialsEnum from 'enums/SocialsEnum';

const bem = html.bem('SocialNetworks');

export default class SocialNetworks extends React.PureComponent {

    static propTypes = {
        color: PropTypes.oneOf(['white', 'black']),
        layout: PropTypes.oneOf(['horizontal', 'vertical']),
        socials: PropTypes.shape({
            telegram: PropTypes.bool,
            vk: PropTypes.bool,
            insta: PropTypes.bool,
            ok: PropTypes.bool,
            youtube: PropTypes.bool,
            twitter: PropTypes.bool,
        })
    };

    static defaultProps = {
        color: 'black',
        layout: 'horizontal',
        socials: {
            telegram: true,
            vk: true,
            insta: true,
            ok: false,
            youtube: false,
            twitter: false,
        }
    };

    render() {
        return (
            <ul className={bem.block({layout: this.props.layout === 'vertical' && 'vertical'})}>
                {Object.keys(this.props.socials).map((social, index) => {
                    if (!this.props.socials[social]) {
                        return null;
                    }

                    return (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <a
                                className={bem.element('link')}
                                href={SocialsEnum.getSocialUrl(social)}
                                title={SocialsEnum.getLabel(social)}
                                target='_blank'
                            >
                                <Icon
                                    className={bem.element('icon')}
                                    fill={this.props.color === 'white' && '#fff'}
                                    name={SocialsEnum.getIconsLabel(social)}
                                />
                            </a>
                        </li>
                    )
                })}
            </ul>
        );
    }
}