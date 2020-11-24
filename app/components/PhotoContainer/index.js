/**
 *
 * PhotoContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortId from 'shortid';
import { Photo, Img } from '../';

const ScrollableWrapper = styled.div`
  overflow-y: scroll;
  padding: 0.25em;
  margin: 3.5em 1.75em 3.5em 3.5em;

  @media screen and (min-width: 768px) {
    padding: 1em;
    margin: 6em 4.5em 6em 6em;
  }

  height: 100vh;
`;
const StyledPhotoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: solid 1px white;
    border-radius: 10px;
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
    <ScrollableWrapper>
      <StyledPhotoContainer id="photoContainer">
        {photoSquares}
      </StyledPhotoContainer>
    </ScrollableWrapper>
  );
}

PhotoContainer.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(PhotoContainer);
