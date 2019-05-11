import React from 'react';
import { Requireable, ReactNodeLike } from 'prop-types';
import Modal from 'react-modal';

import { html } from 'components';

const bem = html.bem('ModalView');

interface IntOwnProps {
    overlay: string;
    onClose: () => void;
    children: Requireable<ReactNodeLike>;
}

export default class ModalView extends React.PureComponent<IntOwnProps> {

    render() {
        return (
            <div className={bem.block()}>
                <Modal
                    className={bem.element('modal')}
                    overlayClassName={bem(bem.element('overlay'), this.props.overlay)}
                    ariaHideApp={false}
                    isOpen
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