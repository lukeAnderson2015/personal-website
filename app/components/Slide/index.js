/**
 *
 * Slide
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.div`
  flex-shrink: 0;
  max-width: 50%;
  height: auto;
  scroll-snap-align: start;
`;

function Slide(props) {
  return <StyledSlide>{props.children}</StyledSlide>;
}

Slide.propTypes = {
  children: PropTypes.object,
};

export default memo(Slide);
