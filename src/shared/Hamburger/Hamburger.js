import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './Hamburger.scss';

const bem = html.bem('Hamburger');

export default class Hamburger extends React.PureComponent {

    static propTypes = {
        onClick: PropTypes.func,
    };


    render() {
        return (
            <button
                className={bem.block({ open: this.props.isOpen })}
                aria-label={this.props.isOpen ? __('Закрыть меню') : __('Открыть меню')}
                onClick={this.props.onClick}
            >
                <div
                    className={bem.element('line')}
                    aria-hidden
                />
                <div
                    className={bem.element('line')}
                    aria-hidden
                />
                <div
                    className={bem.element('line')}
                    aria-hidden
                />
            </button>
        );
    }
}
