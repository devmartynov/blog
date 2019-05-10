import React from 'react';
import PropTypes from 'prop-types';
import TimeLeftFormatter from 'ui/format/TimeLeftFormatter';

import { html } from 'components';
import ArticleSchema from 'types/ArticleSchema';
import Link from 'shared/Link';
import RoutesEnum from 'enums/RoutesEnum';

import './PostCard.scss';

const bem = html.bem('PostCard');

export default class PostCard extends React.PureComponent {

    static propTypes = {
        item: ArticleSchema,
        className: PropTypes.string,
    };

    render() {
        if (!this.props.item) {
            return null;
        }

        // TODO: copy to clipboard
        // TODO: we should get categories when app loads first time, then set to redux
        return (
            <article className={bem(bem.block(), this.props.className)}>
                <h2 className={bem.element('title')}>
                    <Link
                        label={this.props.item.title}
                        pageId={RoutesEnum.BLOG_POST}
                        params={{
                            slug: this.props.item.slug,
                        }}
                    />
                </h2>
                <ul className={bem.element('categories')}>
                    {this.props.item.categoriesIds.map(category => (
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
                            pageId={RoutesEnum.BLOG_POST}
                            params={{
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