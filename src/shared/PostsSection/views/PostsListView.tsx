import React from 'react';
// @ts-ignore
import Form from 'yii-steroids/ui/form/Form';

import { html } from 'components';
import CategoriesBlock from 'shared/CategoriesBlock/index';
import PopularBlock from 'shared/PopularBlock/index';
import Pagination from 'ui/Pagination/index';
import PaginationMoreView from 'ui/Pagination/PaginationMoreView';

const bem = html.bem('PostsListView');

interface IntOwnProps {
    listId: string;
    empty: React.ReactNode;
    content: React.ReactNode;
}

export default class PostsListView extends React.PureComponent<IntOwnProps> {

    // TODO: while list is loading show facebook preloader
    render() {
        return (
            <Form
                className={bem.block()}
                formId={this.props.listId}
            >
                <div className={bem.element('inner')}>
                    <div className={bem.element('main-content')}>
                        <div className={bem.element('list')}>
                            {this.props.content}
                            {this.props.empty}
                        </div>
                        <div className={bem.element('pagination-more')}>
                            <Pagination
                                {...this.props}
                                view={PaginationMoreView}
                                loadMore
                            />
                        </div>
                    </div>
                    <aside className={bem.element('sidebar')}>
                        <CategoriesBlock/>
                        <PopularBlock/>
                    </aside>
                </div>
            </Form>
        );
    }

}