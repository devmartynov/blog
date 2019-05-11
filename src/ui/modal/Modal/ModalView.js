import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {html} from 'components';

const bem = html.bem('ModalView');

export default class ModalView extends React.PureComponent {

    static propTypes = {
        onClose: PropTypes.func,
        children: PropTypes.node,
        overlay: PropTypes.string,
    };

    render() {
        return (
            <div className={bem.block()}>
                <Modal
                    isOpen={true}
                    className={bem.element('modal')}
                    overlayClassName={bem(bem.element('overlay'), this.props.overlay)}
                    ariaHideApp={false}
                    {...this.props}
                >
                    <div className={bem.element('inner')}>
                        <div className={bem.element('content')}>
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

}