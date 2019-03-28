import RoutesEnum from '../enums/RoutesEnum';

import MainPage from './MainPage';

export default {
    id: RoutesEnum.MAIN,
    exact: true,
    path: '/',
    component: MainPage,
    label: RoutesEnum.getLabel(RoutesEnum.MAIN),
    title: RoutesEnum.getLabel(RoutesEnum.MAIN),
    items: [

    ]
};
