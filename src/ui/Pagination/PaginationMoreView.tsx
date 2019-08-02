import React from 'react';
// @ts-ignore
import Button from 'yii-steroids/ui/form/Button';

import { html } from 'components';
import StringMap from 'models/IterableGenericObject';

const bem = html.bem('PaginationMoreView');

interface IntOwnProps {
    text: string;
    buttonProps: StringMap<string | boolean>;
    onSelectNext: () => void;
}

export default class PaginationMoreView extends React.Component<IntOwnProps> {

    render() {
        return (
            <div className={bem(bem.block(), 'text-center my-4')}>
                <Button
                    color='light'
                    outline
                    label={__('Загрузить еще...')}
                    {...this.props.buttonProps}
                    onClick={this.props.onSelectNext}
                />
            </div>
        );
    }

}
