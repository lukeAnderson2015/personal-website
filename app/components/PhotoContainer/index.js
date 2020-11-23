/**
 *
 * PhotoContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortId from 'shortid';
import {
  Photo,
  Img,
} from '../';

const StyledPhotoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
}`;

function PhotoContainer({ photos }) {
  const photoSquares = photos.map(p => (
    <Photo key={ShortId.generate()}>
      <Img
        src={p}
        alt="image-unavailable"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Photo>
  ));

  return (
    <StyledPhotoContainer id="photoContainer">
      {photoSquares}
    </StyledPhotoContainer>
  );
}

PhotoContainer.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(PhotoContainer);
