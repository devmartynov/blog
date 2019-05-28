import { Redirect } from 'react-router';

import RoutesEnum from 'enums/RoutesEnum';
import LayoutEnum from 'enums/LayoutEnum';

import MainPage from './MainPage/index';
import BlogPage from './BlogPage/index';
import PostPage from './PostPage/index';
import ContactsPage from './ContactsPage/index';
import AboutMePage from './AboutMePage/index';

export default {
    id: RoutesEnum.MAIN,
    exact: true,
    path: '/',
    component: MainPage,
    // @ts-ignore
    label: RoutesEnum.getLabel(RoutesEnum.MAIN),
    // @ts-ignore
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
        {
            id: RoutesEnum.CONTACTS,
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            // @ts-ignore
            label: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
            // @ts-ignore
            title: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
        },
    ],
};
