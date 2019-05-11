import React from 'react';
import PropTypes from 'prop-types';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';

const bem = html.bem('PaginationMoreView');

export default class PaginationMoreView extends React.Component {

    static propTypes = {
        text: PropTypes.string,
        buttonProps: PropTypes.object,
        onSelectNext: PropTypes.func,
    };

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
