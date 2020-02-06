/**
 *
 * Slider
 *
 */

import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Img from 'components/Img';
import arrowRight from 'images/icons8-chevron-right-64.png';
import arrowLeft from 'images/icons8-chevron-left-64.png';
import useWindowDimensions from 'utils/windowDimensions';

const StyledSlider = styled.div`
    display: flex;
    overflow-x: auto;
    max-width: inherit;
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;  
}`;

const sharedButtonStyle = css`
  height: auto;
  width: auto;
  top: 160%;
  position: absolute;

  z-index: 99;

  :hover {
    cursor: pointer;
  }
`;

const RightButton = styled.span`
  ${sharedButtonStyle}
  right: 10px;
`;

const LeftButton = styled.span`
  ${sharedButtonStyle}
  left: 10px;
`;

function Slider(props) {
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const { width } = useWindowDimensions();
  const slideSize = width; // 75% from <Slide/> width: 75%
  const scrollBehavior = 'smooth';

  return (
    <div ref={sliderWrapperRef}>
      <StyledSlider ref={sliderRef} id="slider">
        {props.children}
      </StyledSlider>
      <LeftButton
        onClick={() =>
          sliderRef.current.scrollBy({
            top: 0,
            left: -slideSize,
            behavior: scrollBehavior,
          })
        }
      >
        <Img
          src={arrowLeft}
          alt="image-unavailable"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
      </LeftButton>
      <RightButton
        onClick={() =>
          sliderRef.current.scrollBy({
            top: 0,
            left: slideSize,
            behavior: scrollBehavior,
          })
        }
      >
        <Img
          src={arrowRight}
          alt="image-unavailable"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
      </RightButton>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(Slider);
