import { combineReducers, ReducersMapObject } from 'redux';
import { reducer as form, FormReducer } from 'redux-form';
// @ts-ignore
import fields from 'yii-steroids/reducers/fields';
// @ts-ignore
import list from 'yii-steroids/reducers/list';
// @ts-ignore
import config from 'yii-steroids/reducers/config';
// @ts-ignore
import notifications from 'yii-steroids/reducers/notifications';
// @ts-ignore
import modal from 'yii-steroids/reducers/modal';
// @ts-ignore
import routing from 'yii-steroids/reducers/routing';
// @ts-ignore
import navigation from 'yii-steroids/reducers/navigation';

import {
    IntFieldsState,
    IntListState,
    IntConfigState,
    IntNotificationsState,
    IntModalState,
    IntRoutingState,
    IntNavigationState,
} from '../state/initialState.d';

export interface IntRootState {
    form: FormReducer;
    fields: IntFieldsState;
    list: IntListState;
    config: IntConfigState;
    notifications: IntNotificationsState;
    modal: IntModalState;
    routing: IntRoutingState;
    navigation: IntNavigationState;
}

export default (asyncReducers: ReducersMapObject<IntRootState>) => combineReducers({
    form,
    fields,
    list,
    config,
    notifications,
    modal,
    routing,
    navigation,
    ...asyncReducers,
});
