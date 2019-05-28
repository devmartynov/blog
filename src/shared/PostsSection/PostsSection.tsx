import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'react-router-redux';
import _get from 'lodash-es/get';

import { html } from 'components';
import Nav from 'ui/nav/Nav';
import PostCard from 'shared/PostCard/index';
import List from 'ui/list/List';
import PostsListView from './views/PostsListView';
import NavItemModel from 'models/NavItem';

// static data
import { articlesDev, articlesLife } from 'static/data/articles';

const bem = html.bem('PostsSection');

interface IntOwnProps {
    navItems: Array<NavItemModel>;
    isLife: boolean;
    listId: string;
    action: string;
}

interface IntStateProps {
    dispatch: Dispatch;
}

type IntProps = IntOwnProps & IntStateProps;

class PostsSection extends React.PureComponent<IntProps> {

    constructor(props: IntProps) {
        super(props);

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
                        activeTab={_get(this.props.navItems.find((item: NavItemModel) => item.isActive), 'id')}
                        onChange={(id: string) => {
                            const item: NavItemModel | undefined = this.props.navItems.find(
                                (navItem: NavItemModel) => navItem.id === id
                            );

                            if (!item) {
                                return null;
                            }

                            // Timeout for fix setState() call in Nav component
                            setTimeout(() => this.props.dispatch(push(item.url)));
                        }}
                        items={this.props.navItems.map((item: NavItemModel) => ({
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
                // action={this.props.action}
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

export default connect()(PostsSection);