import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';
import Link from 'shared/Link';
import RoutesEnum from 'enums/RoutesEnum';

import './MeLink.scss';

const bem = html.bem('MeLink');

export default class MeLink extends React.PureComponent {

    static propTypes = {
        className: PropTypes.string,
    };

    // TODO: change photos
    static STATIC_IMAGE_SRC = [
        './../images/me-1.JPG',
        './../images/me-2.jpeg',
    ];

    static ANIMATED_IMAGE_SRC = './../images/me.gif';

    constructor() {
        super(...arguments);

        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);

        this._linkRef = null;

        this.state = {
            imageSrc: MeLink.STATIC_IMAGE_SRC[0],
        };
    }

    componentDidMount() {
        this._linkRef.addEventListener('mouseover', this.mouseOverHandler);
        this._linkRef.addEventListener('mouseout', this.mouseOutHandler);
    }

    componentWillUnmount() {
        this._linkRef.removeEventListener('mouseover', this.mouseOverHandler);
        this._linkRef.removeEventListener('mouseout', this.mouseOutHandler);
    }

    render() {
        return (
            <Link
                className={bem(bem.block(), this.props.className)}
                pageId={RoutesEnum.ABOUT_ME}
            >
                <div
                    className={bem.element('inner')}
                    ref={ref => this._linkRef = ref}
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

    mouseOverHandler() {
        this.setState({
            imageSrc: MeLink.ANIMATED_IMAGE_SRC,
        });
    }

    mouseOutHandler() {
        this.setState({
            imageSrc: MeLink.STATIC_IMAGE_SRC[MeLink.getRandomNumber(0, 1)],
        });
    }

    static getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max + 1 - min));
    }

}
