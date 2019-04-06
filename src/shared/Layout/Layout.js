import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import navigationHoc from 'yii-steroids/ui/nav/navigationHoc';
import {getCurrentItem} from 'yii-steroids/reducers/navigation';

import { html } from 'components';
import routesTree from '../../routes';
import LayoutEnum from 'enums/LayoutEnum';
import Header from 'shared/Header';
import Footer from 'shared/Footer';

import './Layout.scss';

const bem = html.bem('Layout');

@navigationHoc(routesTree)
@connect(state => ({
    currentItem: getCurrentItem(state),
}))
export default class Layout extends React.PureComponent {

    static propTypes = {
        currentItem: PropTypes.object,
    };

    render() {
        if (!this.props.currentItem) {
            return this.renderAuthLayout();
        }

        if (this.props.currentItem.layout === LayoutEnum.LOGIN) {
            return this.renderAuthLayout();
        }

        if (this.props.currentItem.layout === LayoutEnum.NO_FOOTER) {
            return this.renderNoFooterLayout();
        }

        return this.renderBaseLayout();
    }

    renderBaseLayout() {
        return (
            <div className={bem.block()}>
                <Header/>
                <main className={bem.element('content')}>
                    {this.props.children}
                </main>
                <Footer/>
                <ModalWrapper/>
            </div>
        );
    }

    renderAuthLayout(children = null) {
        return (
            <>
                {children || this.props.children}
            </>
        );
    }

    renderNoFooterLayout() {
        return (
            <div className={bem.block()}>
                <Header/>
                <main className={bem.element('content')}>
                    {this.props.children}
                </main>
                <ModalWrapper/>
            </div>
        );
    }

}
