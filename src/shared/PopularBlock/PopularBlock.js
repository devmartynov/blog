import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Link from 'shared/Link';
import Icon from 'shared/Icon';
import RoutesEnum from 'enums/RoutesEnum';

import './PopularBlock.scss';

const bem = html.bem('PopularBlock');

export default class PopularBlock extends React.PureComponent {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            count: PropTypes.number,
        })),
        withCount: PropTypes.bool,
        isArticle: PropTypes.bool,
    };

    //TODO: delete default items
    static defaultProps = {
        items: [
            {
                id: '1',
                label: 'Canvas простым языком',
                count: 30,
            },
            {
                id: '2',
                label: 'React vs Vue',
                count: 25,
            },
            {
                id: '3',
                label: 'Собираем приложение на 5+',
                count: 20,
            },
            {
                id: '4',
                label: 'Git основы',
                count: 15,
            },
            {
                id: '5',
                label: 'Async/Await в JavaScript',
                count: 10,
            },
        ],
        withCount: true,
    };

    render() {
        if (!this.props.items || !this.props.items.length) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <h3 className={bem.element('title')}>
                    {__('Популярное')}
                </h3>
                <ul className={bem.element('list')}>
                    {this.props.items.map(item => (
                        <li
                            className={bem.element('item')}
                            key={item.id}
                        >
                            <Link
                                className={bem.element('link')}
                                label={item.label}
                                pageId={this.props.isArticle ? RoutesEnum.ARTICLE_ITEM : RoutesEnum.ARTICLE_ITEM}
                                params={{
                                    id: item.id,
                                }}
                            />
                            {this.props.withCount && (
                                <div
                                    className={bem.element('count')}
                                    aria-label={__('Количество просмотров')}
                                >
                                    {item.count}
                                    <Icon
                                        className={bem.element('icon')}
                                        name='eye'
                                        width={14}
                                        height={14}
                                    />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}