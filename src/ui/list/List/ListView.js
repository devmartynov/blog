import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Pagination from 'ui/Pagination';
import PaginationMoreView from 'ui/Pagination/PaginationMoreView';

const bem = html.bem('ListView');

export default class ListView extends React.Component {

    static propTypes = {
        listId: PropTypes.string,
        content: PropTypes.node,
        empty: PropTypes.node,
        list: PropTypes.shape({
            total: PropTypes.number,
        }),
    };

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
                        loadMore={true}
                        view={PaginationMoreView}
                    />
                </div>
            </div>
        );
    }

}
