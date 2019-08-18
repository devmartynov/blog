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
import routes, { ROUTE_BLOG, ROUTE_BLOG_POST } from '../../routes';
import NavItemModel from 'models/NavItem';
import RootStateModel from 'models/RootState';

import './BlogLayout.scss';

const bem = html.bem('BlogLayout');

interface IntProps {
    routeId: string;
    blogNavItems: Array<NavItemModel>;
}

class BlogLayout extends React.PureComponent<IntProps> {

    // @ts-ignore
    render() {
        const ContentComponent: React.ReactNode = _get(
            routes, ['items', ROUTE_BLOG, 'items', this.props.routeId, 'component'],
        );

        if (this.props.routeId === ROUTE_BLOG_POST) {
            // @ts-ignore
            return <ContentComponent/>;
        }

        return (
            <section className={bem.block()}>
                <h1 className={bem.element('title')}>
                    {__('Блог')}
                </h1>
                <ul className={bem.element('nav')}>
                    {this.props.blogNavItems
                        .filter((item: NavItemModel) => item.isNavVisible !== false)
                        .map((item: NavItemModel) => (
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
                                    isLinkView
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className={bem.element('content')}>
                    {ContentComponent && (
                        // @ts-ignore
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

// @ts-ignore
export default connect(mapStateToProps, null)(BlogLayout);