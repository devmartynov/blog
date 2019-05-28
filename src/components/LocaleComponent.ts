// @ts-ignore
import BaseLocaleComponent from 'yii-steroids/components/LocaleComponent';

export default class LocaleComponent extends BaseLocaleComponent {
    language: string;

    // TODO: add type for props
    // tslint:disable:no-any
    constructor(props: any) {
        super(props);

        this.language = 'ru';
    }

    // tslint:enable:no-any
}
