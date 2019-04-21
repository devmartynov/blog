import RoutesEnum from '../enums/RoutesEnum';
import LayoutEnum from '../enums/LayoutEnum';
import {Redirect} from 'react-router';

import MainPage from './MainPage';
import BlogPage from './BlogPage';
import PostPage from './PostPage';
import ContactsPage from './ContactsPage';
import AboutMePage from './AboutMePage';

export default {
    id: RoutesEnum.MAIN,
    exact: true,
    path: '/',
    component: MainPage,
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
                to: '/blog/dev'
            },
            label: RoutesEnum.getLabel(RoutesEnum.BLOG),
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
                    label: RoutesEnum.getLabel(RoutesEnum.BLOG_DEVELOPMENT),
                    title: RoutesEnum.getLabel(RoutesEnum.BLOG_DEVELOPMENT),
                    items: [
                        {
                            id: RoutesEnum.BLOG_POST,
                            exact: true,
                            path: '/blog/dev/:id(\\w{2,})',
                            component: PostPage,
                            componentProps: {
                                isLife: false,
                            },
                            label: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                            title: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                        },
                    ]
                },
                {
                    id: RoutesEnum.BLOG_LIFE,
                    exact: true,
                    path: '/blog/life',
                    component: BlogPage,
                    componentProps: {
                        isLife: true,
                    },
                    label: RoutesEnum.getLabel(RoutesEnum.BLOG_LIFE),
                    title: RoutesEnum.getLabel(RoutesEnum.BLOG_LIFE),
                    items: [
                        {
                            id: RoutesEnum.BLOG_POST,
                            exact: true,
                            path: '/blog/life/:id(\\w{2,})',
                            component: PostPage,
                            componentProps: {
                                isLife: true,
                            },
                            label: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                            title: RoutesEnum.getLabel(RoutesEnum.BLOG_POST),
                        },
                    ],
                },
            ],
        },
        {
            id: RoutesEnum.ABOUT_ME,
            exact: true,
            path: '/me',
            component: AboutMePage,
            label: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
            title: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
        },
        {
            id: RoutesEnum.CONTACTS,
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            label: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
            title: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
        },
    ]
};
