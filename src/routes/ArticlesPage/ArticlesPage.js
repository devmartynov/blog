import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNavItems} from 'yii-steroids/reducers/navigation';
import _get from 'lodash-es/get';
import {push} from 'react-router-redux';

import {html} from 'components';
import Nav from 'ui/nav/Nav';
import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';
import ArticleCard from 'shared/ArticleCard';
import List from 'ui/list/List';

//static data
import items from 'static/data/articles';

import './ArticlesPage.scss';

const bem = html.bem('ArticlesPage');
const getListId = isLife => isLife ? 'list_articles_life' : 'list_articles_development';
const getAction = isLife => isLife ? '/articles?type=life' : '/articles?type=development';

@connect(
    (state, props) => ({
        navItems: getNavItems(state, RoutesEnum.ARTICLES),
        isLife: props.isLife,
    })
)
export default class ArticlesPage extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        isLife: PropTypes.bool,
    };

    render() {
        return (
            <section className={bem.block()}>
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
                    items={this.props.navItems
                        .filter(item => item.id !== RoutesEnum.ARTICLE_ITEM)
                        .map(item => ({
                            id: item.id,
                            label: item.label,
                            url: item.url,
                            content: this.getContent()
                        }))}
                />
            </section>
        );
    }

    getContent() {
        return (
            <List
                listId={getListId(this.props.isLife)}
                //action={getAction(this.props.isLife)}
                items={items}
                itemView={ArticleCard}
                itemProps={{
                    isArticle: true,
                    isSocilasButtons: false,
                    className: 'ListView__item'
                }}
                defaultPageSize={2}
                pageSize={2}
                emptyView={() => <div>{__('Здесь пока нет ниодной записи.')}</div>}
            />
        )
    }

}
