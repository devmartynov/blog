import React from 'react';
// @ts-ignore
import Link from 'yii-steroids/ui/nav/Link';

import { html } from 'components';
import TimeLeftFormatter from 'ui/format/TimeLeftFormatter';
import { ROUTE_BLOG_POST } from '../../routes';
import ArticleModel from 'models/Article';

const bem = html.bem('PostCard');

interface IntOwnProps {
    item: ArticleModel;
    className: string;
}

export default class PostCard extends React.PureComponent<IntOwnProps> {

    render() {
        if (!this.props.item) {
            return null;
        }

        // TODO: copy to clipboard
        // TODO: fetch categories when app loads first time, then set to redux
        return (
            <article className={bem(bem.block(), this.props.className)}>
                <h2 className={bem.element('title')}>
                    <Link
                        className={bem.element('title-link')}
                        label={this.props.item.title}
                        toRoute={ROUTE_BLOG_POST}
                        toRouteParams={{
                            category: 'dev',
                            slug: this.props.item.slug,
                        }}
                        isLinkView
                    />
                </h2>
                <ul className={bem.element('categories')}>
                    {this.props.item.categoriesIds.map((category: number) => (
                        <li
                            key={category}
                            className={bem.element('categories-item')}
                        >
                            <a
                                className={bem.element('categories-link')}
                                href='1'
                            >
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className={bem.element('subtitle')}>
                    {this.props.item.subtitle}
                </p>
                <p className={bem.element('annotation')}>
                    {this.props.item.annotation}
                </p>
                <div className={bem.element('footer')}>
                    <div className={bem.element('footer-left')}>
                        <Link
                            className={bem.element('read-link')}
                            label={__('Читать дальше')}
                            toRoute={ROUTE_BLOG_POST}
                            toRouteParams={{
                                category: 'dev',
                                slug: this.props.item.slug,
                            }}
                        />
                    </div>
                    <div className={bem.element('footer-right')}>
                        <button
                            className={bem.element('copy-link')}
                            onClick={() => console.log('copy')}
                        >
                            {__('Скопировать ссылку')}
                        </button>
                        <time
                            className={bem.element('create-date')}
                            dateTime={this.props.item.createdAt}
                        >
                            <TimeLeftFormatter
                                value={this.props.item.createdAt}
                            />
                        </time>
                    </div>
                </div>
            </article>
        );
    }

}