import React from 'react';

import { html } from 'components';

const bem = html.bem('NotesPage');

export default class NotesPage extends React.PureComponent {

    render() {
        return (
            <section className={bem.block()}>
                NotesPage
            </section>
        );
    }

}
