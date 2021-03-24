/**
 *
 * Photo
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortId from 'shortid';
import { Photo, Img } from '..';
import { windowWidthThreshhold } from '../../utils/constants';

const ScrollableWrapper = styled.div`
  overflow-y: scroll;
  padding: 0.25em;
  margin: 3.5em 1.75em 3.5em 3.5em;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    padding: 1em;
    margin: 6em 4.5em 6em 6em;
  }

  height: 100vh;
`;
const StyledPhotosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: solid 1px white;
    border-radius: 10px;
}`;

function Photos({ photos, windowWidth }) {
  const photoSquares = photos.map(p => (
    <Photo windowWidth={windowWidth} key={ShortId.generate()}>
      <Img
        src={p}
        alt="image-unavailable"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Photo>
  ));

  return (
    <ScrollableWrapper>
      <StyledPhotosWrapper>
        {photoSquares}
      </StyledPhotosWrapper>
    </ScrollableWrapper>
  );
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(Photos);
