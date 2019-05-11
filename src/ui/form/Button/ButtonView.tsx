import React from 'react';

import { html } from 'components';
import Icon from 'shared/Icon';
import IterableGenericObjectModel from 'models/IterableGenericObject';

const bem = html.bem('ButtonView');

interface IntOwnProps {
    className: string;
    label: string;
    url: string;
    type: 'button' | 'submit';
    size: 'sm' | 'md' | 'lg';
    color:
        'primary' |
        'secondary' |
        'success' |
        'danger' |
        'warning' |
        'info' |
        'light' |
        'dark';
    link: boolean;
    outline: boolean;
    disabled: boolean;
    submitting: boolean;
    block: boolean;
    arrow: boolean;
    bordered: boolean;
    onClick: () => void;
    view: () => void;

}

export default class ButtonView extends React.PureComponent<IntOwnProps> {

    render() {
        return this.props.link || this.props.url ? this.renderLink() : this.renderButton();
    }

    renderLink() {
        return (
            <a
                className={this._getClassName({ link: true })}
                href={this.props.url}
                onClick={this.props.onClick}
            >
                {this.renderLabel()}
            </a>
        );
    }

    renderButton() {
        return (
            <button
                type={this.props.type}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={this._getClassName()}
            >
                {this.renderLabel()}
            </button>
        );
    }

    renderLabel() {
        return (
            <span>
                {this.props.children}
                {this.props.arrow && (
                    <Icon
                        className={bem.element('arrow')}
                        name='arrow-right'
                    />
                )}
            </span>
        );
    }

    _getClassName(modifiers: IterableGenericObjectModel<string | boolean> = {}) {
        return bem(
            bem.block({
                outline: this.props.outline,
                size: this.props.size,
                disabled: this.props.disabled,
                submitting: this.props.submitting,
                arrow: this.props.arrow,
                bordered: this.props.bordered,
                ...modifiers,
            }),
            this.props.className,
        );
    }
}
