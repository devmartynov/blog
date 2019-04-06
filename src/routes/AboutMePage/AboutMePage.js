import React from 'react';

import { html } from 'components';

import './AboutMePage.scss';

const bem = html.bem('AboutMePage');

export default class AboutMePage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                AboutMePage
            </div>
        );
    }

}
