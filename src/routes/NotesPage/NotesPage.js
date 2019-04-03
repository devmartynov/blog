import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './NotesPage.scss';

const bem = html.bem('NotesPage');

export default class NotesPage extends React.PureComponent {

    static propTypes = {};

    render() {
        return (
            <div className={bem.block()}>
                NotesPage
            </div>
        );
    }

}
