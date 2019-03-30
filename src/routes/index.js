import RoutesEnum from '../enums/RoutesEnum';

import MainPage from './MainPage';
import ArticlesPage from './ArticlesPage';
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
    items: [
        {
            id: RoutesEnum.ARTICLES,
            exact: true,
            path: '/articles',
            component: ArticlesPage,
            label: RoutesEnum.getLabel(RoutesEnum.ARTICLES),
            title: RoutesEnum.getLabel(RoutesEnum.ARTICLES),
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
