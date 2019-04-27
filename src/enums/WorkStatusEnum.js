import Enum from 'yii-steroids/base/Enum';

export default class WorkStatusEnum extends Enum {

    static FREE = 'free';
    static BUSY = 'busy';
    static HAVE_FREE_TIME = 'have_free_time';

    static getLabels() {
        return {
            [this.FREE]: __('Полностью свободен'),
            [this.BUSY]: __('Занят'),
            [this.HAVE_FREE_TIME]: __('Есть свободное время'),
        };
    }

    static getCssClasses() {
        return {
            [this.FREE]: 'free',
            [this.BUSY]: 'busy',
            [this.HAVE_FREE_TIME]: 'have-free-time',
        };
    }

    static getTitles() {
        return {
            [this.FREE]: __('Могу посвятить все свое время новому проекту'),
            [this.BUSY]: __('В данный момент сильно занят'),
            [this.HAVE_FREE_TIME]: __('Есть свободное время для нового проекта'),
        };
    }

    static getTitle(id) {
        return this.getTitles()[id] || '';
    }
}
