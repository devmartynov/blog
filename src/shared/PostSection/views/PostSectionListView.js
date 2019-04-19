import React from 'react';
import PropTypes from 'prop-types';
import Form from 'yii-steroids/ui/form/Form';

import {html} from 'components/index';
import Pagination from 'ui/Pagination/index';
import PaginationMoreView from 'ui/Pagination/PaginationMoreView';
import CategoriesBlock from 'shared/CategoriesBlock';
import PopularBlock from 'shared/PopularBlock';

import './PostSectionListView.scss';

const bem = html.bem('PostSectionListView');

export default class PostSectionListView extends React.PureComponent {

    static propTypes = {};

    // TODO: while list is loading show facebook preloader(https://www.skptricks.com/2017/12/facebook-loading-animation-using-css3.html)
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
                                loadMore={true}
                                view={PaginationMoreView}
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