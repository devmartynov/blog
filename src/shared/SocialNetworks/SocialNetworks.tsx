import React from 'react';
import { DefaultProps, createPropsGetter } from '@martin_hotell/rex-tils';

import { html } from 'components';
import Icon from 'shared/Icon/index';
import SocialsEnum from 'enums/SocialsEnum';

const bem = html.bem('SocialNetworks');
const WHITE_COLOR = '#fff';
const defaultSocials: IntSocials = {
    telegram: true,
    vk: true,
    insta: true,
    ok: true,
    youtube: false,
    twitter: false,
};
const defaultProps = DefaultProps({
    color: 'white' as 'white' | 'black',
    layout: 'horizontal' as 'horizontal' | 'vertical',
    socials: defaultSocials as IntSocials,
});
const getProps = createPropsGetter(defaultProps);

interface IntSocials {
    telegram?: TBooleanOrUndefined;
    vk?: TBooleanOrUndefined;
    insta?: TBooleanOrUndefined;
    ok?: TBooleanOrUndefined;
    youtube?: TBooleanOrUndefined;
    twitter?: TBooleanOrUndefined;
    [social: string]: TBooleanOrUndefined;
}

type TBooleanOrUndefined = boolean | undefined;
type TProps = DefaultProps<typeof defaultProps>;

export default class SocialNetworks extends React.PureComponent<TProps> {

    static readonly defaultProps = defaultProps;

    render() {
        const { color, layout, socials } = getProps(this.props);

        return (
            <ul className={bem.block({ layout: layout === 'vertical' && 'vertical' })}>
                {Object.keys(socials).map((social: string, index: number) => {
                    if (!socials[social]) {
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
                                    fill={color === 'white' ? WHITE_COLOR : undefined}
                                    name={SocialsEnum.getIconsLabel(social)}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}