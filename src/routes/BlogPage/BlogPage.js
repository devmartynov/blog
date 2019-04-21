import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNavItems} from 'yii-steroids/reducers/navigation';

import RoutesEnum from 'enums/RoutesEnum';
import NavItemSchema from 'types/NavItemSchema';
import PostsSection from 'shared/PostsSection';

const getListId = isLife => isLife ? 'list_articles_life' : 'list_articles_development';
const getAction = isLife => isLife ? '/blog?type=life' : '/blog?type=development';

@connect(
    (state, props) => ({
        navItems: getNavItems(state, RoutesEnum.BLOG),
        isLife: props.isLife,
    })
)
export default class BlogPage extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        isLife: PropTypes.bool,
    };

    render() {
        return (
            <PostsSection
                navItems={this.props.navItems}
                isLife={this.props.isLife}
                isArticle
                listId={getListId(this.props.isLife)}
                action={getAction(this.props.isLife)}
            />
        );
    }
}
