import { openModal, closeModal } from 'interface/actions/modals';
import CloseIcon from 'interface/icons/Cross';
import Portal from 'interface/Portal';
import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

import './Modal.scss';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const Modal = ({ children, onClose, openModal, closeModal }: Props) => {
  useEffect(() => {
    openModal();
    return closeModal;
  }, [openModal, closeModal]);

  return (
    <Portal>
      <aside className="modal">
        <div className="container">
          <button className="close" onClick={onClose}>
            <CloseIcon />
          </button>
          <div className="content">{children}</div>
        </div>
      </aside>
    </Portal>
  );
};

export default connect(null, {
  openModal,
  closeModal,
})(Modal);
