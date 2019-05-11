import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _get from 'lodash-es/get';

import { html } from 'components';
import Nav from 'ui/nav/Nav';
import NavItemSchema from 'types/NavItemSchema';
import PostCard from 'shared/PostCard';
import PostsListView from './views/PostsListView';
import List from 'ui/list/List';

//static data
import { articlesDev, articlesLife } from 'static/data/articles';

const bem = html.bem('PostsSection');

@connect()
export default class PostsSection extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        isLife: PropTypes.bool,
        listId: PropTypes.string,
        action: PropTypes.string,
    };

    constructor() {
        super(...arguments);

        this.getEmptyListMessage = this.getEmptyListMessage.bind(this);
    }

    render() {
        return (
            <section className={bem.block()}>
                <div className={bem.element('inner')}>
                    <h1 className={bem.element('title')}>
                        {__('Блог')}
                    </h1>
                    <Nav
                        layout='tabs'
                        activeTab={_get(this.props.navItems.find(item => item.isActive), 'id')}
                        onChange={id => {
                            const item = this.props.navItems.find(item => item.id === id);
                            // Timeout for fix setState() call in Nav component
                            setTimeout(() => this.props.dispatch(push(item.url)));
                        }}
                        items={this.props.navItems.map(item => ({
                            id: item.id,
                            label: item.label,
                            url: item.url,
                            content: this.getContent(),
                        }))}
                    />
                </div>
            </section>
        );
    }

    // TODO: uncomment action property, delete items property when API is ready
    getContent() {
        return (
            <List
                listId={this.props.listId}
                //action={this.props.action}
                items={this.props.isLife ? articlesLife : articlesDev}
                itemView={PostCard}
                itemProps={{
                    className: 'PostsListView__item',
                }}
                view={PostsListView}
                defaultPageSize={2}
                pageSize={2}
                emptyView={this.getEmptyListMessage}
            />
        );
    }

    // TODO: better empty block
    getEmptyListMessage() {
        return (
            <div>{__('Здесь пока нет ни одной записи.')}</div>
        );
    }
}