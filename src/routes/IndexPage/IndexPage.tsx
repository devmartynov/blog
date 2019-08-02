import React from 'react';

import { html } from 'components';

const bem = html.bem('IndexPage');

export default class IndexPage extends React.PureComponent {

    render() {
        return (
            <section className={bem.block()}>
                <h1 className={bem.element('title')}>
                    {__('Делаю frontend')}
                    <br/>
                    {__('Пишу об этом')}
                </h1>
            </section>
        );
    }
}
