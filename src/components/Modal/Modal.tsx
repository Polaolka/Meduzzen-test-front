import React, { MouseEvent, useEffect, useCallback } from 'react';
import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { createPortal } from 'react-dom';

interface ModalProps {
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const modalRoot = document.querySelector('#modal-root');

const Modal: React.FC<ModalProps> = ({ active = false, setActive, children }) => {
  const handleCloseModal = useCallback(
    (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => {
      if (
        (e.type === 'click' && (e.target as HTMLElement) === e.currentTarget) ||
        (e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape')
      ) {
        setActive(false);
      }
    },
    [setActive]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  useEffect(() => {
    if (active) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [active]);

  const closeModal = () => {
    setActive(false);
  };

  return createPortal(
    <ModalStyled
      onClick={(e) => handleCloseModal(e)}
      className={!active ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="button" className="close" onClick={closeModal}>
            <IoMdClose size={28} />
          </button>
          {children}
        </div>
      </div>
    </ModalStyled>,
    modalRoot as Element
  );
};

export default Modal;