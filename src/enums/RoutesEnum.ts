import Enum from './Enum';
import StringMap from 'models/StringMap';

export default class RoutesEnum extends Enum {

    static MAIN: string = 'main';
    static BLOG: string = 'blog';
    static BLOG_DEVELOPMENT: string = 'blog_development';
    static BLOG_LIFE: string = 'blog_life';
    static BLOG_POST: string = 'blog_post';
    static ABOUT_ME: string = 'about_me';

    static getLabels(): StringMap<string> {
        return {
            [this.MAIN]: __('Главная'),
            [this.BLOG]: __('Блог'),
            [this.BLOG_DEVELOPMENT]: __('Про разработку'),
            [this.BLOG_LIFE]: __('Про жизнь'),
            [this.BLOG_POST]: __('Статья'),
            [this.ABOUT_ME]: __('Обо мне'),
        };
    }
}
