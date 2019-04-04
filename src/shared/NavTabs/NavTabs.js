import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import Nav from 'yii-steroids/ui/nav/Nav'

import {html} from 'components';
import NavItemSchema from 'types/NavItemSchema';

import './NavTabs.scss';

const bem = html.bem('NavTabs');

@connect()
export default class NavTabs extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
    };

    render() {
        if (!this.props.navItems || !this.props.navItems.length) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <Nav
                    layout='tabs'
                    activeTab={_get(this.props.navItems.find(item => item.isActive), 'id')}
                    onChange={id => {
                        const item = this.props.navItems.find(item => item.id === id);
                        // Timeout for fix setState() call in Nav component
                        setTimeout(() => this.props.dispatch(push(item.url)));
                    }}
                    items={this.props.navItems.map(item => ({
                        id: item.id,
                        label: item.label,
                        url: item.url,
                    }))}
                />
                {this.props.children}
            </div>
        );
    }

}