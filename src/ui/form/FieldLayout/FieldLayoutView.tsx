import React from 'react';

import { html } from 'components';
import StringMap from 'models/StringMap';

const bem = html.bem('FieldLayoutView');

// tslint:disable:no-any
interface IntOwnProps {
    label: string | boolean;
    hint: string | boolean;
    errors: string | Array<string>;
    required: boolean;
    disabled: boolean;
    layout: string;
    layoutClassName: string;
    layoutProps: StringMap<any>;
}

// tslint:enable:no-any

export default class FieldLayoutView extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <div className={bem(
                bem.block({
                    layout: this.props.layout,
                }),
                this.props.layoutClassName,
            )}>
                {(this.props.label || this.props.label === '') && (
                    <div className={bem(
                        bem.element('label', {
                            required: this.props.required,
                            disabled: this.props.disabled,
                            'is-filter': this.props.layout === 'filter',
                        }),
                    )}>
                        {this.props.label}
                    </div>
                )}
                <div className={bem.element('field')}>
                    {this.props.children}
                    {this.props.errors && (
                        <div className={bem.element('invalid-feedback')}>
                            {this.renderErrors()}
                        </div>
                    )}
                    {!this.props.errors && this.props.hint && (
                        <div className={bem.element('hint')}>
                            {this.props.hint}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    renderErrors() {
        const errors: Array<string> = [];

        if (typeof this.props.errors === 'string') {
            errors.push(this.props.errors);
        }

        if (typeof this.props.errors === 'object') {
            errors.concat(this.props.errors);
        }

        return (
            errors.map((error: string, index: number) => (
                <div
                    className={bem.element('error')}
                    key={index}
                >
                    <span className={bem.element('error-icon')}>
                        <span className='Icon Icon__info_red'/>
                    </span>
                    <span className={bem.element('error-text')}>
                        {error === 'Required'
                            ? __('Обязательно для заполнения')
                            : __('Заполнено некорректно')
                        }
                    </span>
                </div>
            ))
        );
    }
}
