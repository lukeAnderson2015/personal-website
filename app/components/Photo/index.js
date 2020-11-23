/**
 *
 * Slide
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const SizedPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    border: solid 3px white;
    z-index: 9999999;
    transform: scale(1.5);
  }

  margin: 1em;
  max-width: 20em;
  height: 15em;
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    background: 'black',
    padding: '2em',
  },
  overlay: {
    background: 'black',
  },
};

function Photo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <SizedPhoto onClick={toggleModal}>
      {props.children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={modalStyles}
      >
        {props.children}
      </Modal>
    </SizedPhoto>
  );
}

Photo.propTypes = {
  children: PropTypes.object,
};

export default memo(Photo);
