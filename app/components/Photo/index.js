/**
 *
 * Slide
 *
 */

import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const SizedPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
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
    width: width > 768 ? '50%' : '95%',
    background: 'black',
    padding: '2em',
  },
  overlay: {
    background: 'black',
  },
});

function Photo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  // handle window resizing to style dropdown container
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth), [window.innerWidth];
    }
    console.log('width: ', window.innerWidth)
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <SizedPhoto onClick={toggleModal}>
      {props.children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={modalStyles(windowWidth)}
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
