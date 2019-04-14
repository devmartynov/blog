import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';
import CheckboxListField from 'ui/form/CheckboxListField';
import CategoriesCheckboxListFieldView from 'shared/CategoriesBlock/views/CategoriesCheckboxListFieldView';

import './CategoriesBlock.scss';

const bem = html.bem('CategoriesBlock');

export default class CategoriesBlock extends React.PureComponent {

    static propTypes = {

    };

    // TODO: delete default items
    static defaultProps = {
        items: [
            {
                id: '1',
                label: 'React',
                count: 20,
            },
            {
                id: '2',
                label: 'JavaScript',
                count: 15,
            },
            {
                id: '3',
                label: 'Canvas',
                count: 10,
            },
            {
                id: '4',
                label: 'Vue',
                count: 5,
            },
        ],
    };

    render() {
        return (
            <CheckboxListField
                layout='filter'
                attribute='categories'
                label={__('Категории')}
                items={this.props.items}
                view={CategoriesCheckboxListFieldView}
                emptyLabel={__('Все')}
                numberOfItems={5}
            />
        );
    }
}