import Enum from 'yii-steroids/base/Enum';

export default class RoutesEnum extends Enum {

    static MAIN = 'main';
    static ARTICLES = 'articles';
    static ARTICLES_DEVELOPMENT = 'articles_development';
    static ARTICLES_LIFE = 'articles_life';
    static ARTICLE_ITEM = 'articles_item';
    static NOTES = 'notes';
    static CONTACTS = 'contacts';
    static ABOUT_ME = 'about_me';

    static getLabels() {
        return {
            [this.MAIN]: __('Главная'),
            [this.ARTICLES]: __('Статьи'),
            [this.ARTICLES_DEVELOPMENT]: __('Про разработку'),
            [this.ARTICLES_LIFE]: __('Про жизнь'),
            [this.ARTICLE_ITEM]: __('Статья'),
            [this.NOTES]: __('Заметки'),
            [this.CONTACTS]: __('Контакты'),
            [this.ABOUT_ME]: __('Обо мне'),
        };
    }
}
