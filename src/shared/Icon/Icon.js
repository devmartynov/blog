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
import DeleteIcon from './DeleteIcon';
import DocIcon from './DocIcon';
import DownloadIcon from './DownloadIcon';
import ErrorIcon from './ErrorIcon';
import ExitIcon from './ExitIcon';
import FileIcon from './FileIcon';
import FilterIcon from './FilterIcon';
import FullIcon from './FullIcon';
import LoginIcon from './LoginIcon';
import LogoutIcon from './LogoutIcon';
import MenuIcon from './MenuIcon';
import MinusIcon from './MinusIcon';
import OkayIcon from './OkayIcon';
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';
import ReloadIcon from './ReloadIcon';
import RingIcon from './RingIcon';
import SettingsIcon from './SettingsIcon';
import ShareIcon from './ShareIcon';
import SkipIcon from './SkipIcon';
import SmDownIcon from './SmDownIcon';
import SmUpIcon from './SmUpIcon';
import StarIcon from './StarIcon';
import StopIcon from './StopIcon';
import TargetIcon from './TargetIcon';
import TargetHIcon from './TargetHIcon';
import TwitterIcon from './TwitterIcon';
import UploadIcon from './UploadIcon';
import VolumeIcon from './VolumeIcon';
import ZoomIcon from './ZoomIcon';
import EyeIcon from './EyeIcon';

export default class Icon extends React.PureComponent {

    //TODO: add "youtube" icon
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