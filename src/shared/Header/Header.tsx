import React from 'react';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
// @ts-ignore
import { getNavItems } from 'yii-steroids/reducers/navigation';

import { html } from 'components';
import Logo from 'shared/Logo/index';
import Hamburger from 'shared/Hamburger/index';
import MeLink from 'shared/MeLink/index';
import Menu from 'shared/Menu/index';
import Navigation from 'shared/Navigation';
import RoutesEnum from 'enums/RoutesEnum';
import RootStateModel from 'models/RootState';
import NavItemModel from 'models/NavItem';

const bem = html.bem('Header');

interface IntStateProps {
    navItems: Array<NavItemModel>;
}

interface IntOwnState {
    isMenuOpen: boolean;
}

class Header extends React.PureComponent<IntStateProps, IntOwnState> {

    constructor(props: IntStateProps) {
        super(props);

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
                            navItems={this.props.navItems.filter(
                                (item: NavItemModel) => item.id !== RoutesEnum.CONTACTS,
                            )}
                            closeMenu={this.onHamburgerClick}
                        />
                    )}
                </header>
            </Headroom>
        );
    }

    // TODO: fix overflow
    onHamburgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
            const body: HTMLElement | null = document.querySelector('body');

            if (!body) {
                return null;
            }

            // prevent user scrolling
            if (this.state.isMenuOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
        });
    }
}

const mapStateToProps = (state: RootStateModel): IntStateProps => ({
    navItems: getNavItems(state, RoutesEnum.MAIN),
});

export default connect(mapStateToProps)(Header);
