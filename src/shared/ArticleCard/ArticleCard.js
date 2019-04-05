import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';
import ArticleSchema from 'types/ArticleSchema';
import Link from 'shared/Link';
import RoutesEnum from 'enums/RoutesEnum';

import './ArticleCard.scss';

const bem = html.bem('ArticleCard');

export default class ArticleCard extends React.PureComponent {

    static propTypes = {
        item: ArticleSchema,
        isArticle: PropTypes.bool,
        isSocilasButtons: PropTypes.bool,
        className: PropTypes.string,
    };

    render() {
        if (!this.props.item) {
            return null;
        }

        // TODO: copy to clipboard
        // TODO: dateFormatter
        // TODO: we should get categories when app loads first time, then set to redux
        return (
            <article className={bem(bem.block(), this.props.className)}>
                <h2 className={bem.element('title')}>
                    {this.props.item.title}
                </h2>
                {this.props.isArticle && (
                    <ul className={bem.element('categories')}>
                        {this.props.item.categoriesIds.map(category => (
                            <li
                                key={category}
                                className={bem.element('categories-item')}
                            >
                                <a
                                    className={bem.element('categories-link')}
                                    href=""
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {!this.props.isArticle && (
                    <p className={bem.element('subtitle')}>
                        {this.props.item.subtitle}
                    </p>
                )}
                <p className={bem.element('annotation')}>
                    {this.props.item.annotation}
                </p>
                <div className={bem.element('footer')}>
                    <div className={bem.element('footer-left')}>
                        {this.props.isArticle && (
                            <Link
                                className={bem.element('read-link')}
                                label={__('Читать дальше')}
                                pageId={RoutesEnum.ARTICLE_ITEM}
                                params={{
                                    id: this.props.item.id,
                                }}
                            />
                        ) || (
                            <div className={bem.element('socials-buttons')}>
                                socials
                            </div>
                        )}
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
                            {this.props.item.createdAt}
                        </time>
                    </div>
                </div>
            </article>
        );
    }

}