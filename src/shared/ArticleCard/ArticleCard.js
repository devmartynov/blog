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
    };

    render() {
        if (!this.props.item) {
            return null;
        }

        return (
            <article className={bem.block()}>
                <h2 className={bem.element('title')}>
                    {this.props.item.title}
                </h2>
                {!this.props.isArticle && (
                    <p className={bem.element('subtitle')}>
                        {this.props.item.subtitle}
                    </p>
                )}
                <p className={bem.element('annotation')}>
                    {this.props.item.annotaion}
                </p>
                <div className={bem.element('footer')}>
                    <div className={bem.element('footer-left')}>
                        {this.props.isArticle && (
                            <Link
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
                        <Link
                            label={__('Скопировать ссылку')}
                            onClick={() => console.log('copy')} // TODO: copy to clipboard
                        />
                        <time
                            className={bem.element('create-date')}
                            dateTime={this.props.createdAt}
                        >
                            {this.props.createdAt} // TODO: dateFormatter
                        </time>
                    </div>
                </div>
            </article>
        );
    }

}