/**
 *
 * Slide
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  flex-shrink: 0;
  scroll-snap-align: center;
`;

function Slide(props) {
  return <StyledSlide className="slide">{props.children}</StyledSlide>;
}

Slide.propTypes = {
  children: PropTypes.object,
};

export default memo(Slide);
