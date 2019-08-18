import React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import DateFormatter from 'yii-steroids/ui/format/DateFormatter';

import { html, http } from 'components';

// static data
import ArticleModel from 'models/Article';
import _get from 'lodash-es/get';

const bem = html.bem('PostPage');

interface IntOwnProps {
    post: ArticleModel | null;
}

interface IntStateProps {
    slug: string;
}

type TProps = IntOwnProps & IntStateProps;

interface IntResponse {
    data: ArticleModel;
}

@http.hoc(
    () => http.get('http://www.mocky.io/v2/5d5975583000006c2ed84c38')
        .then((res: IntResponse) => ({ post: res.data })),
)
class PostPage extends React.PureComponent<TProps> {

    static defaultProps = {
        post: null,
    };

    // TODO: facebook and vk likes button in the bottom of post page
    render() {
        const { post } = this.props;

        if (!post) {
            return null;
        }

        return (
            <section className={bem.block()}>
                <div className={bem.element('inner')}>
                    <h1 className={bem.element('title')}>
                        {post.title}
                    </h1>
                    <div className={bem.element('short-info')}>
                        {post.author.avatar && (
                            <img
                                className={bem.element('image')}
                                src={post.author.avatar}
                                alt={post.author.name}
                            />
                        )}
                        <div className={bem.element('short-info-inner')}>
                            <div className={bem.element('author')}>
                                {post.author.name}
                            </div>
                            <time
                                className={bem.element('create-date')}
                                dateTime={post.createdAt}
                            >
                                <DateFormatter
                                    value={post.createdAt}
                                />
                            </time>
                        </div>
                    </div>
                    <p className={bem.element('subtitle')}>
                        {post.subtitle}
                    </p>
                    <div className={bem.element('content')}>
                        {post.content}
                    </div>
                </div>
            </section>
        );
    }
}

// tslint:disable
const mapStateToProps = (state: any) => ({
    slug: _get(state, 'routing.location.pathname', ''),
});

export default connect(mapStateToProps, null)(PostPage);