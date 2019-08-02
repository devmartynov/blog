import { Redirect } from 'react-router';

import RoutesEnum from 'enums/RoutesEnum';
import LayoutEnum from 'enums/LayoutEnum';

import IndexPage from './IndexPage';
import BlogPage from './BlogPage';
import BlogLayout from 'shared/BlogLayout';
import BlogDevPage from 'shared/BlogDevPage';
import LifeBlogPage from 'shared/LifeBlogPage';
import PostPage from './PostPage';
import AboutMePage from './AboutMePage';

export const app = {
    id: RoutesEnum.MAIN,
    exact: true,
    path: '/',
    component: IndexPage,
    label: RoutesEnum.getLabel(RoutesEnum.MAIN),
    title: RoutesEnum.getLabel(RoutesEnum.MAIN),
    layout: LayoutEnum.NO_FOOTER,
    items: [
        {
            id: RoutesEnum.BLOG,
            exact: true,
            path: '/blog',
            component: Redirect,
            componentProps: {
                to: '/blog/dev',
            },
            // @ts-ignore
            label: RoutesEnum.getLabel(RoutesEnum.BLOG),
            // @ts-ignore
            title: RoutesEnum.getLabel(RoutesEnum.BLOG),
            items: [
                {
                    id: RoutesEnum.BLOG_DEVELOPMENT,
                    exact: true,
                    path: '/blog/dev',
                    component: BlogPage,
                    componentProps: {
                        isLife: false,
                    },
                    // @ts-ignore
                    label: RoutesEnum.getLabel(RoutesEnum.BLOG_DEVELOPMENT),
                    // @ts-ignore
                    title: RoutesEnum.getLabel(RoutesEnum.BLOG_DEVELOPMENT),
                },
                {
                    id: RoutesEnum.BLOG_LIFE,
                    exact: true,
                    path: '/blog/life',
                    component: BlogPage,
                    componentProps: {
                        isLife: true,
                    },
                    // @ts-ignore
                    label: RoutesEnum.getLabel(RoutesEnum.BLOG_LIFE),
                    // @ts-ignore
                    title: RoutesEnum.getLabel(RoutesEnum.BLOG_LIFE),
                },
                {
                    id: RoutesEnum.BLOG_POST,
                    exact: true,
                    path: '/blog/:type?/:slug',
                    component: PostPage,
                    // @ts-ignore
                    label: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                    // @ts-ignore
                    title: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                },
            ],
        },
        {
            id: RoutesEnum.ABOUT_ME,
            exact: true,
            path: '/me',
            component: AboutMePage,
            // @ts-ignore
            label: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
            // @ts-ignore
            title: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
        },
    ],
};
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';
export const ROUTE_BLOG_REDIRECT = 'blog_redirect';
export const ROUTE_BLOG = 'blog';
export const ROUTE_BLOG_DEV = 'blog_dev';
export const ROUTE_BLOG_LIFE = 'blog_life';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: UserRole.getKeys(),
    label: __('Главная'),
    items: {
        [ROUTE_BLOG_REDIRECT]: {
            exact: true,
            path: '/about',
            component: Redirect,
            componentProps: {
                to: '/about/dev',
            },
            label: __('Блог'),
            isNavVisible: false,
            roles: UserRole.getKeys(),
        },
        [ROUTE_BLOG]: {
            path: '/about',
            component: BlogLayout,
            label: __('Блог'),
            isNavVisible: false,
            roles: [UserRole.REGISTERED],
            items: {
                [ROUTE_BLOG_DEV]: {
                    exact: true,
                    path: '/about/dev',
                    component: BlogDevPage,
                    label: __('Inbox'),
                    icon: 'Icon__notification',
                    roles: [UserRole.REGISTERED],
                    isShowImageLine: true,
                },
                [ROUTE_BLOG_LIFE]: {
                    exact: true,
                    path: '/about/life',
                    component: LifeBlogPage,
                    label: __('Donations'),
                    icon: 'Icon__rhombus',
                    roles: [UserRole.REGISTERED],
                    isShowImageLine: true,
                },
            }
        }
    }
};