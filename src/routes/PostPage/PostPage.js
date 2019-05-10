import React from 'react';
import PropTypes from 'prop-types';
import DateFormatter from 'yii-steroids/ui/format/DateFormatter';

import {html} from 'components';

//static data
import { articlesDev } from 'static/data/articles';
const article = articlesDev[1];

import './PostPage.scss';

const bem = html.bem('PostPage');

//TODO: http request to get post by {id}
export default class PostPage extends React.PureComponent {

    //TODO: delete any
    static propTypes = {
        data: PropTypes.any
    };

    //TODO: facebook and vk likes button in the bottom of post page
    render() {
        return (
            <section className={bem.block()}>
                <div className={bem.element('inner')}>
                    <h1 className={bem.element('title')}>
                        {article.title}
                    </h1>
                    <div className={bem.element('short-info')}>
                        {article.author.image && (
                            <img
                                className={bem.element('image')}
                                src={article.author.image}
                                alt={article.author.name}
                            />
                        )}
                        <div className={bem.element('short-info-inner')}>
                            <div className={bem.element('author')}>
                                {article.author.name}
                            </div>
                            <time
                                className={bem.element('create-date')}
                                dateTime={article.createdAt}
                            >
                                <DateFormatter
                                    value={article.createdAt}
                                />
                            </time>
                        </div>
                    </div>
                    <p className={bem.element('subtitle')}>
                        {article.subtitle}
                    </p>
                    <div className={bem.element('content')}>
                        {article.content}
                    </div>
                </div>
            </section>
        );
    }

}