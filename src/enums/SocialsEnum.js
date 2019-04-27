import Enum from 'yii-steroids/base/Enum';

export default class SocialsEnum extends Enum {

    static TELEGRAM = 'telegram';
    static VK = 'vk';
    static INSTA = 'insta';
    static OK = 'ok';
    static YOUTUBE = 'youtube';
    static TWITTER = 'twitter';

    static getLabels() {
        return {
            [this.TELEGRAM]: __('Телеграм'),
            [this.VK]: __('Вконтакте'),
            [this.INSTA]: __('Инстаграм'),
            [this.OK]: __('Одноклассники'),
            [this.YOUTUBE]: __('Ютюб'),
            [this.TWITTER]: __('Твиттер'),
        };
    }

    static getIconsLabels() {
        return {
            [this.TELEGRAM]: 'telegram',
            [this.VK]: 'vk',
            [this.INSTA]: 'insta',
            [this.OK]: 'ok',
            [this.YOUTUBE]: 'youtube',
            [this.TWITTER]: 'twitter',
        };
    }

    static getIconsLabel(id) {
        return this.getIconsLabels()[id] || '';
    }

    static getSocialsUrls() {
        return {
            [this.TELEGRAM]: 'https://t.me/domartynov',
            [this.VK]: 'https://vk.com/martynov_do',
            [this.INSTA]: 'https://www.instagram.com/martynov.do',
            [this.OK]: 'ok',
            [this.YOUTUBE]: 'youtube',
            [this.TWITTER]: 'twitter',
        };
    }

    static getSocialUrl(id) {
        return this.getSocialsUrls()[id] || '';
    }

}
