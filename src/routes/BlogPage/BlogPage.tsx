import React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import List from 'yii-steroids/ui/list/List';
import _get from 'lodash-es/get';

import { html, http } from 'components';
import ArticleModel from 'models/Article';
import PostCard from 'shared/PostCard';

import './BlogPage.scss';

const bem = html.bem('BlogDevPage');

interface IntOwnProps {
    items: Array<ArticleModel>;
}

interface IntStateProps {
    isDev: boolean;
}

type TProps = IntOwnProps & IntStateProps;

interface IntResponse {
    data: Array<ArticleModel>;
}

@http.hoc(
    (props: TProps) => http.get(
        props.isDev
            ? 'http://www.mocky.io/v2/5d52d2ab2e0000480081dc4c'
            : 'http://www.mocky.io/v2/5d52d2ab2e0000480081dc4c',
    ).then((res: IntResponse) => ({ items: res.data })),
)
class BlogPage extends React.PureComponent<TProps> {

    static defaultProps = {
        items: [],
    };

    render() {
        const { items, isDev } = this.props;

        if (!items.length) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <List
                    listId={isDev ? 'BlogDevPage' : 'BlogLifePage'}
                    items={items}
                    itemView={PostCard}
                />
            </div>
        );
    }
}

// tslint:disable
const mapStateToProps = (state: any) => ({
    isDev: /dev/.test(_get(state, 'routing.location.pathname', '')),
});

export default connect(mapStateToProps, null)(BlogPage);
