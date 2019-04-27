import Enum from 'yii-steroids/base/Enum';

export default class RoutesEnum extends Enum {

    static MAIN = 'main';
    static BLOG = 'blog';
    static BLOG_DEVELOPMENT = 'blog_development';
    static BLOG_LIFE = 'blog_life';
    static BLOG_POST = 'blog_post';
    static CONTACTS = 'contacts';
    static ABOUT_ME = 'about_me';

    static getLabels() {
        return {
            [this.MAIN]: __('Главная'),
            [this.BLOG]: __('Блог'),
            [this.BLOG_DEVELOPMENT]: __('Про разработку'),
            [this.BLOG_LIFE]: __('Про жизнь'),
            [this.BLOG_POST]: __('Статья'),
            [this.CONTACTS]: __('Контакты'),
            [this.ABOUT_ME]: __('Обо мне'),
        };
    }
}
