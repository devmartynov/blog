import { push } from 'react-router-redux';
import { MouseClickEventModel } from 'models/MouseClickEvent';

import { store } from 'components';

export const onLinkClick = (e: MouseClickEventModel, url: string) => {
    if (!e.ctrlKey && !e.shiftKey && !e.metaKey) {
        e.preventDefault();
        store.dispatch(push(url));
    }
};
