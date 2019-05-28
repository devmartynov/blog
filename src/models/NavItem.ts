export default interface NavItemModel {
    id: string;
    label: string;
    title: string;
    url: string;
    isActive: boolean;
    isVisible: boolean | null;
    items?: Array<NavItemModel>;
}