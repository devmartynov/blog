import IterableGenericObjectModel from 'models/IterableGenericObject';

export default class Enum {

    static getLabels(): IterableGenericObjectModel<string> {
        return {};
    }

    static getKeys(): Array<string> {
        return Object.keys(this.getLabels());
    }

    static getLabel(id: string): string {
        return this.getLabels()[id] || '';
    }

    static getCssClasses(): IterableGenericObjectModel<string> {
        return {};
    }

    static getCssClass(id: string): string {
        return this.getCssClasses()[id] || '';
    }

    static getDropdownItems() {
        return Object.entries(this.getLabels())
            .map(([id, label]) => ({
                label,
                id,
            }));
    }
}