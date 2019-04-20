import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _get from 'lodash-es/get';

import {html} from 'components';
import Nav from 'ui/nav/Nav';
import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';
import PostCard from 'shared/PostCard';
import PostSectionListView from './views/PostSectionListView';
import List from 'ui/list/List';

//static data
import {articlesDev, articlesLife} from 'static/data/articles';

import './PostSection.scss';

const bem = html.bem('PostSection');

@connect()
export default class PostSection extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        isLife: PropTypes.bool,
        isArticle: PropTypes.bool,
        isBlog: PropTypes.bool,
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
                        {this.props.isBlog ? __('Блог') : __('Заметки')}
                    </h1>
                    <Nav
                        layout='tabs'
                        activeTab={_get(this.props.navItems.find(item => item.isActive), 'id')}
                        onChange={id => {
                            const item = this.props.navItems.find(item => item.id === id);
                            // Timeout for fix setState() call in Nav component
                            setTimeout(() => this.props.dispatch(push(item.url)));
                        }}
                        items={this.props.navItems
                            .filter(item => item.id !== RoutesEnum.ARTICLE_ITEM)
                            .map(item => ({
                                id: item.id,
                                label: item.label,
                                url: item.url,
                                content: this.getContent()
                            }))}
                    />
                </div>
            </section>
        );
    }

    // TODO: uncomment action property, delete items property
    getContent() {
        return (
            <List
                listId={this.props.listId}
                //action={this.props.action}
                items={this.props.isLife ? articlesLife : articlesDev}
                itemView={PostCard}
                itemProps={{
                    isArticle: this.props.isArticle,
                    isSocilasButtons: this.props.isArticle,
                    className: 'PostSectionListView__item'
                }}
                view={PostSectionListView}
                defaultPageSize={2}
                pageSize={2}
                emptyView={this.getEmptyListMessage}
            />
        )
    }

    // TODO: better empty block
    getEmptyListMessage() {
        return (
            <div>{__('Здесь пока нет ниодной записи.')}</div>
        )
    }
}