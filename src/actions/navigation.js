export const NAVIGATION_INIT_ROUTES = 'NAVIGATION_INIT_ROUTES';
export const NAVIGATION_SET_PARAMS = 'NAVIGATION_SET_PARAMS';

export const initRoutes = routesTree => ({
    type: NAVIGATION_INIT_ROUTES,
    routesTree,
});

export const initParams = params => ({
    type: NAVIGATION_SET_PARAMS,
    params,
});

export const setCityId = cityId => (dispatch, getState) => {
    const state = getState();
    const params = {};

    if (cityId) {
        const city = state.data.cities.find(item => item.id === cityId);
        if (city) {
            params.city = city.slug;
        }
    } else {
        params.city = null;
    }

    dispatch({
        type: NAVIGATION_SET_PARAMS,
        params,
    });
};
