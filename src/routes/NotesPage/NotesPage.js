import React from 'react';

import { html } from 'components';

const bem = html.bem('NotesPage');

export default class NotesPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                NotesPage
            </div>
        );
    }

}
