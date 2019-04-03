import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './ContactsPage.scss';

const bem = html.bem('ContactsPage');

export default class ContactsPage extends React.PureComponent {

    static propTypes = {};

    render() {
        return (
            <div className={bem.block()}>
                ContactsPage
            </div>
        );
    }

}
