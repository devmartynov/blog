import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNavItems} from 'yii-steroids/reducers/navigation';
import List from 'yii-steroids/ui/list/List';

import {html} from 'components';
import NavTabs from 'shared/NavTabs';
import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';
import ArticleCard from 'shared/ArticleCard';

//static data
import items from '../../static/data/articles';

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
                <NavTabs navItems={this.props.navItems || []}>
                    <List
                        listId={getListId(this.props.isLife)}
                        //action={getAction(this.props.isLife)}
                        items={items}
                        itemView={ArticleCard}
                        itemProps={{
                            isArticle: true,
                            isSocilasButtons: false,
                        }}
                        defaultPageSize={5}
                        emptyView={() => <div>{__('Здесь пока нет ниодной записи.')}</div>}
                    />
                </NavTabs>
            </section>
        );
    }

}
