// tslint:disable:no-any
export default interface MetaModel {
    [metaKey: string]: {
        labels: Array<any>;
        fields: Array<any>;
        formatters?: Array<any>;
    };
}
// tslint:enable:no-any