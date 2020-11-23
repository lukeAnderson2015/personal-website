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
  padding: 2px;

  &:hover {
    cursor: pointer;
    border: solid 2px white;
  }

  margin: 1em;

  width: 20em;
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
    maxWidth: '50%',
    maxHeight: '50%',
  },
};

function Photo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <SizedPhoto onClick={() => setModalIsOpen(true)}>
      {props.children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
