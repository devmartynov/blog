import React from 'react';
import { connect } from 'react-redux';
import { isPresent } from '@martin_hotell/rex-tils';
// @ts-ignore
import { getNavUrl } from 'yii-steroids/reducers/navigation';

import { onLinkClick } from './utils';
import RootStateModel from 'models/RootState';
import IterableGenericObjectModel from 'models/IterableGenericObject';
import { MouseClickEventModel } from 'models/MouseClickEvent';

interface IntOwnProps {
    className?: string;
    label?: string;
    title?: string;
    url?: string;
    pageId?: string;
    params?: IterableGenericObjectModel<string | boolean>;
    onClick?(e: MouseClickEventModel): void;
}

interface IntStateProps {
    url?: string;
}

type TProps = IntOwnProps & IntStateProps;

class Link extends React.PureComponent<TProps> {

    render() {
        return (
            <a
                className={this.props.className}
                href={this.props.url}
                title={this.props.title}
                onClick={(e: MouseClickEventModel) => this._onClick(e)}
            >
                {this.props.label || this.props.children}
            </a>
        );
    }

    _onClick(e: MouseClickEventModel) {
        if (this.props.onClick) {
            return this.props.onClick(e);
        }

        if (isPresent(this.props.url)) {
            return onLinkClick(e, this.props.url);
        }

        return null;
    }

}

const mapStateToProps = (state: RootStateModel, props: IntOwnProps): IntStateProps => ({
    url: props.url || getNavUrl(state, props.pageId, props.params),
});

export default connect(mapStateToProps, null)(Link);
