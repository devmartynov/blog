import React from 'react';

import AddIcon from './AddIcon';
import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';
import ArrowRightIcon from './ArrowRightIcon';
import AttentionIcon from './AttentionIcon';
import CalendarIcon from './CalendarIcon';
import CopyIcon from './CopyIcon';
import FacebookIcon from './FacebookIcon';
import HeartIcon from './HeartIcon';
import InstaFilledIcon from './InstaFilledIcon';
import InstaIcon from './InstaIcon';
import LogoIcon from './LogoIcon';
import OkIcon from './OkIcon';
import TelegramIcon from './TelegramIcon';
import VkIcon from './VkIcon';

export default class Icon extends React.PureComponent {

    render() {
        switch (this.props.name) {
            case 'add':
                return <AddIcon {...this.props}/>;
            case 'arrow-down':
                return <ArrowDownIcon {...this.props}/>;
            case 'arrow-up':
                return <ArrowUpIcon {...this.props}/>;
            case 'arrow-right':
                return <ArrowRightIcon {...this.props}/>;
            case 'attention':
                return <AttentionIcon {...this.props}/>;
            case 'calendar':
                return <CalendarIcon {...this.props}/>;
            case 'copy':
                return <CopyIcon {...this.props}/>;
            case 'fb':
                return <FacebookIcon {...this.props}/>;
            case 'heart':
                return <HeartIcon {...this.props}/>;
            case 'insta-filled':
                return <InstaFilledIcon {...this.props}/>;
            case 'insta':
                return <InstaIcon {...this.props}/>;
            case 'logo':
                return <LogoIcon {...this.props}/>;
            case 'ok':
                return <OkIcon {...this.props}/>;
            case 'telegram':
                return <TelegramIcon {...this.props}/>;
            case 'vk':
                return <VkIcon {...this.props}/>;
            default:
                return null;
        }
    }

}