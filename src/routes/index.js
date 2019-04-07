import RoutesEnum from '../enums/RoutesEnum';
import LayoutEnum from '../enums/LayoutEnum';
import {Redirect} from 'react-router';

import MainPage from './MainPage';
import ArticlesPage from './ArticlesPage';
import ArticlePage from './ArticlePage';
import NotesPage from './NotesPage';
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
            id: RoutesEnum.ARTICLES,
            exact: true,
            path: '/articles',
            component: Redirect,
            componentProps: {
                to: '/articles/development'
            },
            label: RoutesEnum.getLabel(RoutesEnum.ARTICLES),
            title: RoutesEnum.getLabel(RoutesEnum.ARTICLES),
            items: [
                {
                    id: RoutesEnum.ARTICLES_DEVELOPMENT,
                    exact: true,
                    path: '/articles/dev',
                    component: ArticlesPage,
                    componentProps: {
                        isLife: false,
                    },
                    label: RoutesEnum.getLabel(RoutesEnum.ARTICLES_DEVELOPMENT),
                    title: RoutesEnum.getLabel(RoutesEnum.ARTICLES_DEVELOPMENT),
                },
                {
                    id: RoutesEnum.ARTICLES_LIFE,
                    exact: true,
                    path: '/articles/life',
                    component: ArticlesPage,
                    componentProps: {
                        isLife: true,
                    },
                    label: RoutesEnum.getLabel(RoutesEnum.ARTICLES_LIFE),
                    title: RoutesEnum.getLabel(RoutesEnum.ARTICLES_LIFE),
                },
                {
                    id: RoutesEnum.ARTICLE_ITEM,
                    exact: true,
                    path: '/articles/:type?/:id(\\w{2,})',
                    component: ArticlePage,
                    componentProps: {
                        isLife: true,
                    },
                    label: RoutesEnum.getLabel(RoutesEnum.ARTICLE_ITEM),
                    title: RoutesEnum.getLabel(RoutesEnum.ARTICLE_ITEM),
                },
            ],
        },
        {
            id: RoutesEnum.NOTES,
            exact: true,
            path: '/notes',
            component: NotesPage,
            label: RoutesEnum.getLabel(RoutesEnum.NOTES),
            title: RoutesEnum.getLabel(RoutesEnum.NOTES),
        },
        {
            id: RoutesEnum.CONTACTS,
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            label: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
            title: RoutesEnum.getLabel(RoutesEnum.CONTACTS),
        },
        {
            id: RoutesEnum.ABOUT_ME,
            exact: true,
            path: '/me',
            component: AboutMePage,
            label: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
            title: RoutesEnum.getLabel(RoutesEnum.ABOUT_ME),
        },
    ]
};
