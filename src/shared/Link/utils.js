import {push} from 'react-router-redux';

import {store} from 'components';

export const onLinkClick = (e, url) => {
    if (!e.ctrlKey && !e.shiftKey && !e.metaKey) {
        e.preventDefault();
        store.dispatch(push(url));
    }
};
