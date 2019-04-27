import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';
import WorkStatusEnum from 'enums/WorkStatusEnum';

import './WorkStatus.scss';

const bem = html.bem('WorkStatus');

export default class WorkStatus extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    //TODO: tooltip on hover
    render() {
        return (
            <div
                className={bem.block({status: WorkStatusEnum.getCssClass(this.props.status)})}
                title={WorkStatusEnum.getTitle(this.props.status)}
            >
                {WorkStatusEnum.getLabel(this.props.status)}
            </div>
        );
    }
}