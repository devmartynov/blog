import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {openModal, closeModal} from 'yii-steroids/actions/modal';
import Headroom from 'react-headroom';

import { html } from 'components';
import Logo from 'shared/Logo';
import Hamburger from 'shared/Hamburger';
import MeLink from 'shared/MeLink';
import HeaderMenuModal from './views/HeaderMenuModal';
import HeaderNavigationView from './views/HeaderNavigationView';
import { getNavItems } from 'reducers/navigation';
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
                    <div className={bem.element('inner')}>
                        <div className={bem.element('logo')}>
                            <Logo/>
                        </div>
                        <div className={bem.element('content')}>
                            <div className={bem.element('content-inner')}>
                                <HeaderNavigationView
                                    className={bem.element('nav', {hidden: this.state.isMenuOpen})}
                                    navItems={this.props.navItems}
                                />
                                <MeLink className={bem.element('me-link', {hidden: this.state.isMenuOpen})}/>
                            </div>
                        </div>
                        <Hamburger onClick={this.onHamburgerClick}/>
                    </div>
                </header>
            </Headroom>
        );
    }

    onHamburgerClick() {
        if (this.state.isMenuOpen) {
            this.props.dispatch(closeModal());
        } else {
            this.props.dispatch(openModal(HeaderMenuModal, {
                navItems: this.props.navItems.filter(item => item.id !== RoutesEnum.CONTACTS),
            }));
        }

        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
}
