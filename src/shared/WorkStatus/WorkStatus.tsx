import React from 'react';

import { html } from 'components';
import WorkStatusEnum from 'enums/WorkStatusEnum';

const bem = html.bem('WorkStatus');

interface IntOwnProps {
    status: string;
}

export default class WorkStatus extends React.PureComponent<IntOwnProps> {

    // TODO: tooltip on hover
    render() {
        return (
            <div
                className={bem.block({ status: WorkStatusEnum.getCssClass(this.props.status) })}
                title={WorkStatusEnum.getTitle(this.props.status)}
            >
                {WorkStatusEnum.getLabel(this.props.status)}
            </div>
        );
    }
}