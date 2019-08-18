import React from 'react';
// @ts-ignore
import Link from 'yii-steroids/ui/nav/Link';

import { html } from 'components';
import { ROUTE_ABOUT_ME } from '../../routes';
import { getRandomNumber } from './utils';

const bem = html.bem('MeLink');

interface IntOwnProps {
    className: string;
}

interface IntOwnState {
    imageSrc: string;
}

export default class MeLink extends React.PureComponent<IntOwnProps, IntOwnState> {

    // TODO: change photos
    static STATIC_IMAGE_SRC: Array<string> = [
        './../images/me-1.JPG',
        './../images/me-2.jpeg',
    ];

    static ANIMATED_IMAGE_SRC: string = './../images/me.gif';

    // tslint:disable:no-any // TODO: add Ref type
    linkRef: any | null;

    // tslint:enable:no-any
    constructor(props: IntOwnProps) {
        super(props);

        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);

        this.linkRef = null;

        this.state = {
            imageSrc: MeLink.STATIC_IMAGE_SRC[0],
        };
    }

    componentDidMount() {
        this.linkRef.addEventListener('mouseover', this.mouseOverHandler);
        this.linkRef.addEventListener('mouseout', this.mouseOutHandler);
    }

    componentWillUnmount() {
        this.linkRef.removeEventListener('mouseover', this.mouseOverHandler);
        this.linkRef.removeEventListener('mouseout', this.mouseOutHandler);
    }

    // tslint:disable:no-any
    render() {
        return (
            <Link
                className={bem(bem.block(), this.props.className)}
                toRoute={ROUTE_ABOUT_ME}
            >
                <div
                    className={bem.element('inner')}
                    ref={(ref: any) => this.linkRef = ref}
                >
                    <div className={bem.element('text')}>
                        {__('Денис Мартынов')}
                    </div>
                    <div className={bem.element('image-container')}>
                        <img
                            className={bem.element('image')}
                            src={this.state.imageSrc}
                            alt={__('Денис Мартынов')}
                        />
                    </div>
                </div>
            </Link>
        );
    }
    // tslint:enable:no-any

    mouseOverHandler() {
        this.setState({
            imageSrc: MeLink.ANIMATED_IMAGE_SRC,
        });
    }

    mouseOutHandler() {
        this.setState({
            imageSrc: MeLink.STATIC_IMAGE_SRC[getRandomNumber(0, 1)],
        });
    }
}
