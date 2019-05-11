import React from 'react';

import { html } from 'components';

const bem = html.bem('CheckboxListFieldView');

interface IntItem {
    id: string | number;
    label: string;
    isSelected: boolean;
}

interface IntOwnProps {
    fieldId: string;
    label: string | boolean;
    hint: string;
    required: boolean;
    isInvalid: boolean;
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    inputProps: object;
    className: string;
    items: Array<IntItem>;
    onItemClick: (item: IntItem) => void;
}

export default class CheckboxListFieldView extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                {this.props.items.map((item: IntItem) => (
                    <div
                        key={item.id}
                        className={bem.element('item')}
                    >
                        <label className={bem.element('label')}>
                            <input
                                className={bem(
                                    bem.element('input', {
                                        'is-invalid': this.props.isInvalid,
                                    }),
                                    this.props.className,
                                )}
                                id={this.props.fieldId + '_' + item.id}
                                {...this.props.inputProps}
                                checked={item.isSelected}
                                disabled={this.props.disabled}
                                required={this.props.required}
                                onChange={() => this.props.onItemClick(item)}
                            />
                            <span className={bem.element('icon')}>
                                <span className={bem.element('icon-square')}/>
                            </span>
                            <div className={bem.element('text', { required: this.props.required })}>
                                {item.label}
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        );
    }

}
