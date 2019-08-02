import Enum from './Enum';
import StringMap from 'models/IterableGenericObject';

export default class WorkStatusEnum extends Enum {

    static FREE: string = 'free';
    static BUSY: string = 'busy';
    static HAVE_FREE_TIME: string = 'have_free_time';

    static getLabels(): StringMap<string> {
        return {
            [this.FREE]: __('Полностью свободен'),
            [this.BUSY]: __('Занят'),
            [this.HAVE_FREE_TIME]: __('Есть свободное время'),
        };
    }

    static getCssClasses(): StringMap<string> {
        return {
            [this.FREE]: 'free',
            [this.BUSY]: 'busy',
            [this.HAVE_FREE_TIME]: 'have-free-time',
        };
    }

    static getTitles(): StringMap<string> {
        return {
            [this.FREE]: __('Могу посвятить все свое время новому проекту'),
            [this.BUSY]: __('В данный момент сильно занят'),
            [this.HAVE_FREE_TIME]: __('Есть свободное время для нового проекта'),
        };
    }

    static getTitle(id: string): string {
        return this.getTitles()[id] || '';
    }
}
