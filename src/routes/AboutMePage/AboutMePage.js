import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

import './AboutMePage.scss';

const bem = html.bem('AboutMePage');

export default class AboutMePage extends React.PureComponent {

    static propTypes = {};

    render() {
        return (
            <div className={bem.block()}>
                AboutMePage
            </div>
        );
    }

}
