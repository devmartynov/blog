import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import navigationHoc from '../navigationHoc';
import routesTree from '../../routes';

import './Layout.scss';

const bem = html.bem('Layout');

@navigationHoc(routesTree)
export default class Layout extends React.PureComponent {

    static propTypes = {};

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('content')}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
