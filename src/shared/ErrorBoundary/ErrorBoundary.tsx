import React from 'react';

import { html } from 'components';

const bem = html.bem('ErrorBoundary');

interface IntProps {
    // tslint:disable:no-any
    children: any;
    // tslint:enable:no-any
}

interface IntState {
    hasError: boolean;
    error: string;
}

export default class ErrorBoundary extends React.PureComponent<IntProps, IntState> {

    constructor(props: IntProps) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
        };
    }

    componentDidCatch(error: object, info: object) {
        this.setState({
            hasError: true,
            error: error.toString(),
        });
        console.log('---error', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={bem.block()}>
                    <h1 className={bem.element('title')}>
                        {__('Что-то пошло не так!')}
                    </h1>
                    <p className={bem.element('error')}>
                        {__('Oшибка:')} {this.state.error}
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}
