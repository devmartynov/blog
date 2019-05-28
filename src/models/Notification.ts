export default interface NotificationModel {
    [key: string]: {
        id: number;
        level: string;
        message: string;
        isClosing: boolean;
    };
}