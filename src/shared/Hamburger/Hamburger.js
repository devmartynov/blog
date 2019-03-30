import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './Hamburger.scss';

const bem = html.bem('Hamburger');

export default class Hamburger extends React.PureComponent {

    static propTypes = {
        onClick: PropTypes.func,
    };

    constructor() {
        super(...arguments);

        this._onClick = this._onClick.bind(this);

        this.state = {
            isOpen: false,
        };
    }


    render() {
        return (
            <button
                className={bem.block({ open: this.state.isOpen })}
                aria-label={this.state.isOpen ? __('Закрыть меню') : __('Открыть меню')}
                onClick={this._onClick}
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

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

}
