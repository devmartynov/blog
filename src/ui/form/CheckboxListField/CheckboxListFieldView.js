import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

const bem = html.bem('CheckboxListFieldView');
import './CheckboxListFieldView.scss';

export default class CheckboxListFieldView extends React.PureComponent {

    static propTypes = {
        fieldId: PropTypes.string,
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        hint: PropTypes.string,
        required: PropTypes.bool,
        isInvalid: PropTypes.bool,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        disabled: PropTypes.bool,
        inputProps: PropTypes.object,
        className: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            label: PropTypes.string,
        })),
        onItemClick: PropTypes.func,
    };

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                {this.props.items.map(item => (
                    <div
                        key={item.id}
                        className={bem.element('item')}
                    >
                        <label
                            className={bem.element('label')}
                            // htmlFor={this.props.fieldId + '_' + item.id}
                        >
                            <input
                                className={bem(
                                    bem.element('input', {
                                        'is-invalid': this.props.isInvalid
                                    }),
                                    this.props.className
                                )}
                                id={this.props.fieldId + '_' + item.id}
                                {...this.props.inputProps}
                                checked={item.isSelected}
                                disabled={this.props.disabled}
                                required={this.props.required}
                                onChange={() => this.props.onItemClick(item)}
                            />
                            <span className={bem.element('icon')}>
                                <span className={bem.element('icon-square')} />
                            </span>
                            <div className={bem.element('text', {required: this.props.required})}>
                                {item.label}
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        );
    }

}