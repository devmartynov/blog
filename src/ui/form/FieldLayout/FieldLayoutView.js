import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('FieldLayoutView');

export default class FieldLayoutView extends React.PureComponent {

    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        hint: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        errors: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        layout: PropTypes.string,
        layoutProps: PropTypes.object,
        layoutClassName: PropTypes.string,
    };

    render() {
        return (
            <div className={bem(
                bem.block({
                    layout: this.props.layout
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
                            {[].concat(this.props.errors).map((error, index) => (
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
                            ))}
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
}
