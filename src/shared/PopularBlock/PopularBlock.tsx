import React from 'react';
// @ts-ignore
import Link from 'yii-steroids/ui/nav/Link';

import { html } from 'components';
import Icon from 'shared/Icon';
import { ROUTE_BLOG_POST } from '../../routes';

const bem = html.bem('PopularBlock');

interface IntItem {
    id: string;
    label: string;
    count: number;
}

interface IntOwnProps {
    items: Array<IntItem>;
    withCount: boolean;
}

export default class PopularBlock extends React.PureComponent<IntOwnProps> {

    // TODO: delete default items
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
                    {this.props.items.map((item: IntItem) => (
                        <li
                            className={bem.element('item')}
                            key={item.id}
                        >
                            <Link
                                className={bem.element('link')}
                                label={item.label}
                                toRoute={ROUTE_BLOG_POST}
                                toRouteParams={{
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