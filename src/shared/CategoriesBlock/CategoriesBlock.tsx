import React from 'react';

import CheckboxListField from 'ui/form/CheckboxListField';
import CategoriesCheckboxListFieldView from './views/CategoriesCheckboxListFieldView';

interface IntOwnprops {
    items: Array<{
        id: number,
        count: number,
        label: string,
    }>;
}

export default class CategoriesBlock extends React.PureComponent<IntOwnprops> {

    // TODO: delete default items when api will be ready
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
                attribute='categoriesIds'
                label={false}
                items={this.props.items}
                view={CategoriesCheckboxListFieldView}
                emptyLabel={__('Все')}
                numberOfItems={5}
            />
        );
    }
}