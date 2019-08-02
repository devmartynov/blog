import StringMap from 'models/StringMap';

export default class Enum {

    static getLabels(): StringMap<string> {
        return {};
    }

    static getKeys(): Array<string> {
        return Object.keys(this.getLabels());
    }

    static getLabel(id: string): string {
        return this.getLabels()[id] || '';
    }

    static getCssClasses(): StringMap<string> {
        return {};
    }

    static getCssClass(id: string): string {
        return this.getCssClasses()[id] || '';
    }

    static getDropdownItems(): any {
        return Object.entries(this.getLabels())
            .map(([id, label]) => ({
                label,
                id,
            }));
    }
}