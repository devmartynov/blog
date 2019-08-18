import IndexPage from './IndexPage';
import BlogLayout from 'shared/BlogLayout';
import BlogPage from 'routes/BlogPage';
import PostPage from './PostPage';
import AboutMePage from './AboutMePage';

import UserRole from 'enums/UserRole';
import LayoutEnum from 'enums/LayoutEnum';

export const ROUTE_ROOT = 'root';
export const ROUTE_BLOG = 'blog';
export const ROUTE_BLOG_DEV = 'blog_dev';
export const ROUTE_BLOG_LIFE = 'blog_life';
export const ROUTE_ABOUT_ME = 'about_me';
export const ROUTE_BLOG_POST = 'blog_post';

// @ts-ignore
const routes = {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: UserRole.getKeys(),
    label: __('Главная'),
    layout: LayoutEnum.NO_FOOTER,
    items: {
        [ROUTE_BLOG]: {
            path: '/blog',
            component: BlogLayout,
            label: __('Блог'),
            isNavVisible: false,
            roles: [UserRole.REGISTERED],
            items: {
                [ROUTE_BLOG_DEV]: {
                    exact: true,
                    path: '/blog/dev',
                    component: BlogPage,
                    label: __('Блог про разработку'),
                    roles: [UserRole.REGISTERED],
                },
                [ROUTE_BLOG_LIFE]: {
                    exact: true,
                    path: '/blog/life',
                    component: BlogPage,
                    label: __('Блог про жизнь'),
                    roles: [UserRole.REGISTERED],
                },
                [ROUTE_BLOG_POST]: {
                    exact: true,
                    path: '/blog/:category/:slug',
                    component: PostPage,
                    roles: UserRole.getKeys(),
                    label: __('Статья'),
                    isNavVisible: false,
                }
            }
        },
        [ROUTE_ABOUT_ME]: {
            exact: true,
            path: '/about',
            component: AboutMePage,
            roles: UserRole.getKeys(),
            label: __('Обо мне'),
        },
    }
};

export default routes;