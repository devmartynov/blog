import React from 'react';
import PropTypes from 'prop-types';
import _sum from 'lodash-es/sum';

import { html } from 'components';
import Icon from 'shared/Icon';

const bem = html.bem('CategoriesCheckboxListFieldView');

export default class CategoriesCheckboxListFieldView extends React.PureComponent {

    static propTypes = {
        fieldId: PropTypes.string,
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        emptyLabel: PropTypes.string,
        hint: PropTypes.string,
        required: PropTypes.bool,
        isInvalid: PropTypes.bool,
        disabled: PropTypes.bool,
        inputProps: PropTypes.object,
        className: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            label: PropTypes.string,
            count: PropTypes.number,
        })),
        onItemClick: PropTypes.func,
        numberOfItems: PropTypes.number,
        withCount: PropTypes.bool,
    };

    static defaultProps = {
        withCount: true,
    };

    constructor() {
        super(...arguments);

        this.state = {
            isShowAll: false,
        };
    }

    render() {
        const itemsWithOutEmpty = this.props.items.filter(item => item.id !== null);
        const emptyItem = this.props.items.find(item => item.id === null);
        const emptyCount = emptyItem ? emptyItem.count : _sum(this.props.items.map(item => item.count || 0));

        const items = this.state.isShowAll
            ? itemsWithOutEmpty
            : itemsWithOutEmpty.slice(0, this.props.numberOfItems);

        return (
            <div className={bem.element('block')}>
                <h3 className={bem.element('title')}>
                    {__('Категории')}
                </h3>
                <ul className={bem(bem.block(), this.props.className)}>
                    {this.props.emptyLabel && (
                        <li className={bem.element(
                            'item', {
                                empty: true,
                                selected: this.props.selectedItems.length === 0,
                            })}
                        >
                            <label className={bem.element('label')}>
                                <input
                                    className={bem.element('input', {
                                        'is-invalid': this.props.isInvalid,
                                    })}
                                    {...this.props.inputProps}
                                    checked={this.props.selectedItems.length === 0}
                                    disabled={this.props.disabled}
                                    onChange={() => this.props.input.onChange(null)}
                                />
                                {this.props.emptyLabel}
                                {this.props.withCount && (
                                    <div
                                        className={bem.element('count')}
                                        aria-label={__('Количество записей')}
                                    >
                                        {emptyCount.toLocaleString()}
                                    </div>
                                )}
                            </label>
                        </li>
                    )}
                    {items.map(item => (
                        <li
                            key={item.id}
                            className={bem.element('item', { selected: item.isSelected })}
                        >
                            <label className={bem.element('label')}>
                                <input
                                    className={bem.element('input', {
                                        'is-invalid': this.props.isInvalid,
                                    })}
                                    id={this.props.fieldId + '_' + item.id}
                                    {...this.props.inputProps}
                                    checked={item.isSelected}
                                    disabled={this.props.disabled}
                                    onChange={() => this.props.onItemClick(item)}
                                />
                                {item.label}
                                {this.props.withCount && (
                                    <div
                                        className={bem.element('count')}
                                        aria-label={__('Количество записей')}
                                    >
                                        {item.count.toLocaleString()}
                                    </div>
                                )}
                                {item.isSelected && (
                                    <Icon
                                        className={bem.element('close')}
                                        name='delete'
                                    />
                                )}
                            </label>
                        </li>
                    ))}
                    {this.props.numberOfItems > 0 && this.props.items.length > this.props.numberOfItems && (
                        <a
                            href='javascript:void(0)'
                            className={bem.element('show-all')}
                            onClick={() => this.setState({ isShowAll: !this.state.isShowAll })}
                        >
                            {this.state.isShowAll ?
                                __('Скрыть') :
                                __('Ещё {count}', {
                                    count: this.props.items.length - items.length,
                                })
                            }
                        </a>
                    )}
                </ul>
            </div>
        );
    }

}
