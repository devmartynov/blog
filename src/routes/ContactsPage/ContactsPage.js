import React from 'react';

import { html } from 'components';

const bem = html.bem('ContactsPage');

export default class ContactsPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                ContactsPage
            </div>
        );
    }

}
