import React from 'react';

import { html } from 'components';

const bem = html.bem('Hamburger');

interface IntOwnProps {
    isOpen: boolean;
    onClick(): void;
}

export default class Hamburger extends React.PureComponent<IntOwnProps> {

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
