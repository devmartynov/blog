import Enum from './Enum';

export default class UserRole extends Enum {

    static GUEST = null;
    static REGISTERED = 'registered';

    static getKeys(): Array<string> {
        return [
            this.GUEST,
            this.REGISTERED,
        ];
    }

    static getAuth(): Array<string | null> {
        return [
            this.REGISTERED,
        ];
    }
}
