export default class ConfigComponent {
    apiUrl: string;

    constructor() {
        this.apiUrl = process.env.APP_BACKEND_URL || 'https://example.ru';
    }
}
