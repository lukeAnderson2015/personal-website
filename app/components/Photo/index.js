/**
 *
 * Slide
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { windowWidthThreshhold } from '../../utils/constants';

const SizedPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    &:hover {
      cursor: pointer;
      border: solid 3px white;
      z-index: 9999999;
      transform: scale(1.5);
    }
    height: 15em;
    max-width: 20em;
  }

  margin: 1em;
`;

const modalStyles = width => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: width > windowWidthThreshhold ? '50%' : '95%',
    background: 'black',
    padding: '2em',
  },
  overlay: {
    background: 'black',
  },
});

function Photo({ children, windowWidth }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <SizedPhoto onClick={toggleModal}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={modalStyles(windowWidth)}
      >
        {children}
      </Modal>
    </SizedPhoto>
  );
}

Photo.propTypes = {
  children: PropTypes.object,
};

export default memo(Photo);
