import React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { getNavItems } from 'yii-steroids/reducers/navigation';

import PostsSection from 'shared/PostsSection/index';
import RoutesEnum from 'enums/RoutesEnum';
import NavItemModel from 'models/NavItem';
import RootStateModel from 'models/RootState';

const getListId = (isLife: boolean) => isLife ? 'list_articles_life' : 'list_articles_development';
const getAction = (isLife: boolean) => isLife ? '/blog?type=life' : '/blog?type=development';

interface IntOwnProps {
    isLife: boolean;
}

interface IntStateProps {
    navItems: Array<NavItemModel>;
}

type TProps = IntOwnProps & IntStateProps;

class BlogPage extends React.PureComponent<TProps> {

    render() {
        return (
            <PostsSection
                navItems={this.props.navItems}
                isLife={this.props.isLife}
                listId={getListId(this.props.isLife)}
                action={getAction(this.props.isLife)}
            />
        );
    }
}

const mapStateToProps = (state: RootStateModel): IntStateProps => ({
    navItems: getNavItems(state, RoutesEnum.BLOG),
});

export default connect(mapStateToProps)(BlogPage);
