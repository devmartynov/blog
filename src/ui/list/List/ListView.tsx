import React from 'react';
import { Requireable, ReactNodeLike } from 'prop-types';

import { html } from 'components';
import Pagination from 'ui/Pagination';
import PaginationMoreView from 'ui/Pagination/PaginationMoreView';

const bem = html.bem('ListView');

interface IntOwnProps {
    listId: string;
    empty: Requireable<ReactNodeLike>;
    content: Requireable<ReactNodeLike>;
    list: {
        total: number;
        isLoading: boolean;
    };
}

export default class ListView extends React.Component<IntOwnProps> {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('list')}>
                    {this.props.content}
                    {this.props.empty}
                    <div
                        className={bem.element('preloader', { show: this.props.list.isLoading })}
                        aria-hidden
                    />
                </div>
                <div className={bem.element('pagination-more')}>
                    <Pagination
                        {...this.props}
                        view={PaginationMoreView}
                        loadMore
                    />
                </div>
            </div>
        );
    }

}
