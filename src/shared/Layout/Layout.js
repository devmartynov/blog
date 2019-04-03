import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';

import { html } from 'components';
import navigationHoc from '../navigationHoc';
import routesTree from '../../routes';
import Header from 'shared/Header';

import './Layout.scss';

const bem = html.bem('Layout');

@navigationHoc(routesTree)
export default class Layout extends React.PureComponent {

    static propTypes = {};

    render() {
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
