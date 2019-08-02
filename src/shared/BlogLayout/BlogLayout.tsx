import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash-es/get';
// @ts-ignore
import { getNavItems } from 'yii-steroids/reducers/navigation';
// @ts-ignore
import { getCurrentRoute } from 'yii-steroids/reducers/routing';
// @ts-ignore
import Link from 'yii-steroids/ui/nav/Link';

import { html } from 'components';
import routes, { ROUTE_BLOG } from '../../routes';
import NavItemModel from 'models/NavItem';
import RootStateModel from 'models/RootState';

import './ProfileLayout.scss';

const bem = html.bem('ProfileLayout');

interface IntProps {
    routeId: string;
    blogNavItems: Array<NavItemModel>
}

class BlogLayout extends React.PureComponent<IntProps> {

    render() {
        const ContentComponent = _get(routes, ['items', ROUTE_BLOG, 'items', this.props.routeId, 'component']);
        return (
            <section className={bem.block()}>
                <h1 className={bem.element('title')}>
                    {__('Блог')}
                </h1>
                <ul className={bem.element('nav')}>
                    {this.props.blogNavItems
                        .filter(item => item.isNavVisible !== false)
                        .map(item => (
                            <li
                                className={bem.element('nav-item')}
                                key={item.id}
                            >
                                <Link
                                    className={bem.element('nav-link', {
                                        'is-active': item.isActive,
                                    })}
                                    toRoute={item.id}
                                    label={item.label}
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className={bem.element('content')}>
                    {ContentComponent && (
                        <ContentComponent/>
                    )}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: RootStateModel) => ({
    routeId: _get(getCurrentRoute(state), 'id'),
    blogNavItems: getNavItems(state, ROUTE_BLOG),
});

export default connect(mapStateToProps, null)(BlogLayout)