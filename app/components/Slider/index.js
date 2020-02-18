/**
 *
 * Slider
 *
 */

import React, { memo, useRef } from 'react';
import ShortId from 'shortid';
import styled, { css } from 'styled-components';
import arrowRight from 'images/icons8-chevron-right-64.png';
import arrowLeft from 'images/icons8-chevron-left-64.png';
import useWindowDimensions from 'utils/windowDimensions';
import { Img } from 'components';
import Slide from '../Slide/Loadable';
import pictures from '../../images/all_images';

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
  top: 150vh;
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

function Slider() {
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const { width } = useWindowDimensions();
  const slideSize = width;
  const scrollBehavior = 'smooth';

  const slides = pictures.map(p => (
    <Slide key={ShortId.generate()}>
      <Img
        src={p}
        alt="image-unavailable"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Slide>
  ));

  return (
    <div ref={sliderWrapperRef}>
      <StyledSlider ref={sliderRef} id="slider">
        {slides}
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

export default memo(Slider);
