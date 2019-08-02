import React from 'react';
import { connect } from 'react-redux';

import { html, http } from 'components';
import ArticleModel from 'models/Article';

import './ProfileInboxPage.scss';

const bem = html.bem('ProfileInboxPage');

interface IntProps {
    items: Array<ArticleModel>,
}

@http.hoc(
    () => http.get('./../../static/data/articles').then((res) => ({items: res}));
)
export default class BlogDevPage extends React.PureComponent<IntProps> {

    render() {
        if (!this.props.items) {
            return null;
        }

        return (
            <div className={bem.block()}>
                {this.props.items.map(item => (
                    <ProjectInboxCard
                        key={item.uid}
                        item={item}
                        type={InboxTypeEnum.INVITATION_VOTING}
                    />
                ))}
                {this.props.items && this.props.items.length === 0 && (
                    <div>
                        {__('Empty Inbox')}
                    </div>
                )}
            </div>
        );
    }
}
