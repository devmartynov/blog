import React from 'react';
import { connect } from 'react-redux';
import { Requireable, ReactNodeLike } from 'prop-types';
// @ts-ignore
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
// @ts-ignore
import navigationHoc from 'yii-steroids/ui/nav/navigationHoc';
// @ts-ignore
import { getCurrentItem } from 'yii-steroids/reducers/navigation';

import { html } from 'components';
import Header from 'shared/Header';
import Footer from 'shared/Footer';
import routesTree from '../../routes';
import LayoutEnum from 'enums/LayoutEnum';
import RootStateModel from 'models/RootState';
import RoutesTreeModel from 'models/RoutesTree';

const bem = html.bem('Layout');

interface IntStateProps {
    currentItem: RoutesTreeModel | null;
}

@navigationHoc(routesTree)
class Layout extends React.PureComponent<IntStateProps> {

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

    renderAuthLayout(children: Requireable<ReactNodeLike> | null = null) {
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

const mapStateToProps = (state: RootStateModel) => ({
    currentItem: getCurrentItem(state),
});

export default connect(mapStateToProps, null)(Layout);
