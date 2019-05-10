import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNavItems } from 'yii-steroids/reducers/navigation';
import Headroom from 'react-headroom';

import { html } from 'components';
import Logo from 'shared/Logo';
import Hamburger from 'shared/Hamburger';
import MeLink from 'shared/MeLink';
import Menu from 'shared/Menu';
import Navigation from 'shared/Navigation/Navigation';
import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';

import './Header.scss';

const bem = html.bem('Header');

@connect(
    state => ({
        navItems: getNavItems(state, RoutesEnum.MAIN),
    }),
)
export default class Header extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
    };

    constructor() {
        super(...arguments);

        this.onHamburgerClick = this.onHamburgerClick.bind(this);

        this.state = {
            isMenuOpen: false,
        };
    }

    render() {
        return (
            <Headroom>
                <header className={bem.block()}>
                    <Logo
                        className={bem.element('logo')}
                        title={__('Перейти на главую страницу')}
                    />
                    <Navigation
                        className={bem.element('nav', { hidden: this.state.isMenuOpen })}
                        navItems={this.props.navItems}
                    />
                    <MeLink className={bem.element('me-link', { hidden: this.state.isMenuOpen })}/>
                    <Hamburger
                        isOpen={this.state.isMenuOpen}
                        onClick={this.onHamburgerClick}
                    />
                    {this.state.isMenuOpen && (
                        <Menu
                            navItems={this.props.navItems.filter(item => item.id !== RoutesEnum.CONTACTS)}
                            closeMenu={this.onHamburgerClick}
                        />
                    )}
                </header>
            </Headroom>
        );
    }

    //TODO: fix overflow
    onHamburgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
            const body = document.querySelector('body');

            // prevent user scrolling
            if (this.state.isMenuOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
        });
    }
}
