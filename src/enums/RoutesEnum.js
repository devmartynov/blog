import Enum from 'yii-steroids/base/Enum';

export default class RoutesEnum extends Enum {

    static MAIN = 'main';
    static ARTICLES = 'articles';
    static NOTES = 'notes';
    static CONTACTS = 'contacts';
    static ABOUT_ME = 'about_me';

    static getLabels() {
        return {
            [this.MAIN]: __('Главная'),
            [this.ARTICLES]: __('Статьи'),
            [this.NOTES]: __('Заметки'),
            [this.CONTACTS]: __('Контакты'),
            [this.ABOUT_ME]: __('Обо мне'),
        };
    }
}
