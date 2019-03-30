import pathToRegexp from 'path-to-regexp';
import {matchPath} from 'react-router';
import _get from 'lodash-es/get';
import _trimEnd from 'lodash-es/trimEnd';

import {NAVIGATION_INIT_ROUTES, NAVIGATION_SET_PARAMS} from 'actions/navigation';

const DEFAULT_PAGE_TITLE = 'Личный блог Мартынов Дениса';

const initialState = {
    routesTree: null,
    params: {},
};

const findRecursive = (items, pageId, pathItems) => {
    let finedItem = null;
    (items || []).forEach(item => {
        if (item.id === pageId) {
            finedItem = item;
        }
        if (!finedItem) {
            finedItem = findRecursive(item.items, pageId, pathItems);
            if (finedItem && pathItems) {
                pathItems.push(item);
            }
        }
    });
    return finedItem;
};

const checkActiveRecursive = (pathname, item) => {
    const match = matchPath(pathname, {
        exact: !!item.exact,
        strict: !!item.strict,
        path: item.path,
    });
    if (!match) {
        return !!(item.items || []).find(sub => checkActiveRecursive(pathname, sub));
    }
    return true;
};

const buildNavItem = (state, item, params) => {
    const pathname = _get(state, 'routing.location.pathname');
    let url = item.path;
    try {
        url = pathToRegexp.compile(item.path)({
            ...state.navigation.params,
            ...params,
        });
    } catch (e) { // eslint-disable-line no-empty
    }

    return {
        id: item.id,
        title: item.title,
        label: item.label,
        url: _trimEnd(url, '/') + '/',
        isVisible: item.isVisible,
        isActive: checkActiveRecursive(pathname, item),
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATION_INIT_ROUTES:
            return {
                ...state,
                routesTree: action.routesTree,
            };

        case NAVIGATION_SET_PARAMS:
            return {
                ...state,
                params: {
                    ...state.params,
                    ...action.params,
                },
            };
    }

    return state;
};

export const isInitialized = state => !!state.navigation.routesTree;

export const getRoute = (state, pageId) => {
    const root = state.navigation.routesTree;
    if (!root) {
        return null;
    }

    return root.id === pageId ? root : findRecursive(root.items, pageId);
};
export const getNavItem = (state, pageId, params = {}) => {
    const route = getRoute(state, pageId);
    return route ? buildNavItem(state, route, params) : null;
};
export const getNavUrl = (state, pageId, params = {}) => {
    const navItem = getNavItem(state, pageId, params);
    return navItem ? navItem.url : '';
};
export const getNavItems = (state, parentPageId = null, params = {}) => {
    const route = getRoute(state, parentPageId);
    return route
        ? (route.items || []).filter(item => item.isVisible !== false).map(item => buildNavItem(state, item, params))
        : [];
};
export const getBreadcrumbs = (state, pageId = null, params = {}) => {
    const items = [];
    const root = state.navigation.routesTree;
    if (root) {
        if (root.id !== pageId) {
            const route = findRecursive(root.items, pageId, items);
            items.push(root);
            items.reverse();
            items.push(route);
        } else {
            items.push(root);
        }
    }

    return items.filter(item => item.isVisible !== false).map(route => buildNavItem(state, route, params));
};
export const getCityId = state => {
    const getCurrentRoute = require('yii-steroids/reducers/routing').getCurrentRoute;
    const slug = _get(getCurrentRoute(state), 'params.city');
    const city = slug ? _get(state, 'data.cities', []).find(item => item.slug === slug) : null;
    return city && city.id || null;
};
export const getCurrentPageTitle = state => {
    const getCurrentRoute = require('yii-steroids/reducers/routing').getCurrentRoute;
    const currentPageId = _get(getCurrentRoute(state), 'id');
    const currentNavItem = getNavItem(state, currentPageId);

    if(!currentNavItem || !currentNavItem.title) {
        return DEFAULT_PAGE_TITLE;
    }

    return DEFAULT_PAGE_TITLE + ' ' + currentNavItem.title;
};
