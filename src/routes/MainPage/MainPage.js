import React from 'react';

import {html} from 'components';

const bem = html.bem('MainPage');

export default class MainPage extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <div className={bem.block()}>
                <h1 className={bem.element('title')}>
                    {__('Делаю frontend')}
                    <br/>
                    {__('Пишу об этом')}
                </h1>
            </div>
        );
    }
}
