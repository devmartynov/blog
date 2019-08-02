import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// @ts-ignore
import fields from 'yii-steroids/reducers/fields';
// @ts-ignore
import list from 'yii-steroids/reducers/list';
// @ts-ignore
import config from 'yii-steroids/reducers/config';
// @ts-ignore
import notifications from 'yii-steroids/reducers/notifications';
// @ts-ignore
import navigation from 'yii-steroids/reducers/navigation';
// @ts-ignore
import modal from 'yii-steroids/reducers/modal';
// @ts-ignore
import routing from 'yii-steroids/reducers/routing';

// tslint:disable
// @ts-ignore
export default (asyncReducers) => combineReducers({
    form,
    fields,
    list,
    config,
    notifications,
    modal,
    routing,
    navigation,
    ...asyncReducers
});
