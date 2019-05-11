import React from 'react';

import { html } from 'components';

const bem = html.bem('ContactsPage');

export default class ContactsPage extends React.PureComponent {

    render() {
        return (
            <section className={bem.block()}>
                ContactsPage
            </section>
        );
    }

}
