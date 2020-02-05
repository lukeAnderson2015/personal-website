/**
 *
 * Slider
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSlider = styled.div`
    display: flex;
    overflow-x: auto;
    max-width: inherit;
    height: 100vh;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;  
}`;

function Slider(props) {
  return <StyledSlider>{props.children}</StyledSlider>;
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(Slider);
