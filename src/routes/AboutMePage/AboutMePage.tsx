import React from 'react';

import { html } from 'components';

const bem = html.bem('AboutMePage');

export default class AboutMePage extends React.PureComponent {

    render() {
        return (
            <section className={bem.block()}>
                AboutMePage
            </section>
        );
    }

}
