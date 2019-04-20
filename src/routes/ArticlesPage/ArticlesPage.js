import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNavItems} from 'yii-steroids/reducers/navigation';

import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';
import PostSection from 'shared/PostSection';

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
            <PostSection
                navItems={this.props.navItems}
                isLife={this.props.isLife}
                isArticle
                isBlog
                listId={getListId(this.props.isLife)}
                action={getAction(this.props.isLife)}
            />
        );
    }
}
