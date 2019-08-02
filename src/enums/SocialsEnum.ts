import Enum from './Enum';
import StringMap from 'models/IterableGenericObject';

export default class SocialsEnum extends Enum {

    static TELEGRAM: string = 'telegram';
    static VK: string = 'vk';
    static INSTA: string = 'insta';
    static OK: string = 'ok';
    static YOUTUBE: string = 'youtube';
    static TWITTER: string = 'twitter';

    static getLabels(): StringMap<string> {
        return {
            [this.TELEGRAM]: __('Телеграм'),
            [this.VK]: __('Вконтакте'),
            [this.INSTA]: __('Инстаграм'),
            [this.OK]: __('Одноклассники'),
            [this.YOUTUBE]: __('Ютюб'),
            [this.TWITTER]: __('Твиттер'),
        };
    }

    static getIconsLabels(): StringMap<string> {
        return {
            [this.TELEGRAM]: 'telegram',
            [this.VK]: 'vk',
            [this.INSTA]: 'insta',
            [this.OK]: 'ok',
            [this.YOUTUBE]: 'youtube',
            [this.TWITTER]: 'twitter',
        };
    }

    static getIconsLabel(id: string): string {
        return this.getIconsLabels()[id] || '';
    }

    static getSocialsUrls(): StringMap<string> {
        return {
            [this.TELEGRAM]: 'https://t.me/domartynov',
            [this.VK]: 'https://vk.com/martynov_do',
            [this.INSTA]: 'https://www.instagram.com/martynov.do',
            [this.OK]: 'ok',
            [this.YOUTUBE]: 'youtube',
            [this.TWITTER]: 'twitter',
        };
    }

    static getSocialUrl(id: string): string {
        return this.getSocialsUrls()[id] || '';
    }

}
