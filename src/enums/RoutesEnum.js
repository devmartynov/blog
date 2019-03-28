import Enum from 'yii-steroids/base/Enum';

export default class RoutesEnum extends Enum {

    static MAIN = 'main';

    static getLabels() {
        return {
            [this.MAIN]: __('Главная'),
        };
    }
}
