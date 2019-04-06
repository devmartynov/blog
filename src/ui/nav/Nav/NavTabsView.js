import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components/index';
import Link from 'shared/Link';
import NavItemSchema from 'types/NavItemSchema';

import './NavTabsView.scss';

const bem = html.bem('NavTabsView');

export default class NavTabsView extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(NavItemSchema),
        className: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                <div className='wrapper'>
                    <div className='row'>
                        <div className='col'>
                            <ul className={bem.element('items')}>
                                {this.props.items.map((item, index) => (
                                    <li
                                        className={bem.element('item')}
                                        key={index}
                                    >
                                        <Link
                                            className={bem.element('link', {active: item.isActive})}
                                            href={item.url}
                                            onClick={e => {
                                                e.preventDefault();
                                                this.props.onClick(item, index);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className={bem.element('content')}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}