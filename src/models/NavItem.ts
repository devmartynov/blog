export default interface NavItemModel {
    id: string;
    label: string;
    title: string;
    url: string;
    isActive: boolean;
    isVisible: boolean | null;
    isNavVisible?: boolean;
    items?: Array<NavItemModel>;
}