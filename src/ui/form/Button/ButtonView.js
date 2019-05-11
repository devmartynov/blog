import React from 'react';
import PropTypes from 'prop-types';

import { html } from 'components';

const bem = html.bem('ButtonView');

export default class ButtonView extends React.PureComponent {

    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.oneOf(['button', 'submit']),
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        color: PropTypes.oneOf([
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ]),
        link: PropTypes.bool,
        outline: PropTypes.bool,
        url: PropTypes.string,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        submitting: PropTypes.bool,
        block: PropTypes.bool,
        className: PropTypes.string,
        view: PropTypes.func,
    };

    render() {
        return this.props.link || this.props.url ? this.renderLink() : this.renderButton();
    }

    renderLink() {
        return (
            <a
                className={this._getClassName({ link: true })}
                href={this.props.url}
                onClick={this.props.onClick}
            >
                {this.renderLabel()}
            </a>
        );
    }

    renderButton() {
        return (
            <button
                type={this.props.type}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={this._getClassName()}
            >
                {this.renderLabel()}
            </button>
        );
    }

    renderLabel() {
        return (
            <span>
                {this.props.children}
                {this.props.arrow && (
                    <svg
                        className={bem.element('arrow')}
                        width='34px'
                        height='20px'
                        viewBox='0 0 34 20'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g
                            stroke='none'
                            strokeWidth='1'
                            fillRule='evenodd'
                        >
                            <g
                                fillRule='nonzero'
                            >
                                <g
                                    transform='translate(3.000000, 2.500000)'
                                >
                                    <polygon
                                        points='0.5 8.5 0.5 6.5 25.9093998 6.5 25.9093998 8.5'
                                    />
                                    <polygon
                                        points='18.34797 2.25819316 19.65203 0.741806838 27.5293056 7.51609642 19.6557452 14.3547335 18.3442548 12.844769 24.4706944 7.52360606'
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                )}
            </span>
        );
    }

    _getClassName(modifiers) {
        return bem(
            bem.block({
                outline: this.props.outline,
                size: this.props.size,
                disabled: this.props.disabled,
                submitting: this.props.submitting,
                arrow: this.props.arrow,
                bordered: this.props.bordered,
                ...modifiers,
            }),
            this.props.className,
        );
    }
}
