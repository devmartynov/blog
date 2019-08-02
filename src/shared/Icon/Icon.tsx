import React from 'react';

import AddIcon from './AddIcon';
import ArrowDownIcon from './ArrowDownIcon/index';
import ArrowUpIcon from './ArrowUpIcon/index';
import ArrowRightIcon from './ArrowRightIcon/index';
import AttentionIcon from './AttentionIcon/index';
import CalendarIcon from './CalendarIcon/index';
import CopyIcon from './CopyIcon/index';
import FacebookIcon from './FacebookIcon/index';
import HeartIcon from './HeartIcon/index';
import InstaFilledIcon from './InstaFilledIcon/index';
import InstaIcon from './InstaIcon/index';
import LogoIcon from './LogoIcon/index';
import OkIcon from './OkIcon/index';
import TelegramIcon from './TelegramIcon/index';
import VkIcon from './VkIcon/index';
import DeleteIcon from './DeleteIcon/index';
import DocIcon from './DocIcon/index';
import DownloadIcon from './DownloadIcon/index';
import ErrorIcon from './ErrorIcon/index';
import ExitIcon from './ExitIcon/index';
import FileIcon from './FileIcon/index';
import FilterIcon from './FilterIcon/index';
import FullIcon from './FullIcon/index';
import LoginIcon from './LoginIcon/index';
import LogoutIcon from './LogoutIcon/index';
import MenuIcon from './MenuIcon/index';
import MinusIcon from './MinusIcon/index';
import OkayIcon from './OkayIcon/index';
import PauseIcon from './PauseIcon/index';
import PlayIcon from './PlayIcon/index';
import ReloadIcon from './ReloadIcon/index';
import RingIcon from './RingIcon/index';
import SettingsIcon from './SettingsIcon/index';
import ShareIcon from './ShareIcon/index';
import SkipIcon from './SkipIcon/index';
import SmDownIcon from './SmDownIcon/index';
import SmUpIcon from './SmUpIcon/index';
import StarIcon from './StarIcon/index';
import StopIcon from './StopIcon/index';
import TargetIcon from './TargetIcon/index';
import TargetHIcon from './TargetHIcon/index';
import TwitterIcon from './TwitterIcon/index';
import UploadIcon from './UploadIcon/index';
import VolumeIcon from './VolumeIcon/index';
import ZoomIcon from './ZoomIcon/index';
import EyeIcon from './EyeIcon/index';

import StringMap from 'models/IterableGenericObject';

export interface IntIconOwnProps {
    width?: number;
    height?: number;
    style?: StringMap<string | number>;
    viewBox?: string;
    className?: string;
    fill?: string;
    fillBg?: string;
}

interface IntOwnProps extends IntIconOwnProps {
    name: string;
}

export default class Icon extends React.PureComponent<IntOwnProps> {

    // TODO: add "youtube" icon
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
            case 'twitter':
                return <TwitterIcon {...this.props}/>;
            case 'delete':
                return <DeleteIcon {...this.props}/>;
            case 'document':
                return <DocIcon {...this.props}/>;
            case 'download':
                return <DownloadIcon {...this.props}/>;
            case 'error':
                return <ErrorIcon {...this.props}/>;
            case 'exit':
                return <ExitIcon {...this.props}/>;
            case 'file':
                return <FileIcon {...this.props}/>;
            case 'filter':
                return <FilterIcon {...this.props}/>;
            case 'full':
                return <FullIcon {...this.props}/>;
            case 'login':
                return <LoginIcon {...this.props}/>;
            case 'logout':
                return <LogoutIcon {...this.props}/>;
            case 'menu':
                return <MenuIcon {...this.props}/>;
            case 'minus':
                return <MinusIcon {...this.props}/>;
            case 'okay':
                return <OkayIcon {...this.props}/>;
            case 'pause':
                return <PauseIcon {...this.props}/>;
            case 'play':
                return <PlayIcon {...this.props}/>;
            case 'reload':
                return <ReloadIcon {...this.props}/>;
            case 'ring':
                return <RingIcon {...this.props}/>;
            case 'settings':
                return <SettingsIcon {...this.props}/>;
            case 'share':
                return <ShareIcon {...this.props}/>;
            case 'skip':
                return <SkipIcon {...this.props}/>;
            case 'sm-down':
                return <SmDownIcon {...this.props}/>;
            case 'sm-up':
                return <SmUpIcon {...this.props}/>;
            case 'start':
                return <StarIcon {...this.props}/>;
            case 'stop':
                return <StopIcon {...this.props}/>;
            case 'target':
                return <TargetIcon {...this.props}/>;
            case 'target-h':
                return <TargetHIcon {...this.props}/>;
            case 'upload':
                return <UploadIcon {...this.props}/>;
            case 'volume':
                return <VolumeIcon {...this.props}/>;
            case 'zoom':
                return <ZoomIcon {...this.props}/>;
            case 'eye':
                return <EyeIcon {...this.props}/>;
            default:
                return null;
        }
    }
}