import styled from 'styled-components';
import React from 'react';

const StyledSlider = styled.div`
    display: flex;
    overflow-x: auto;
    max-width: inherit;
    max-height: 100vh;

    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;  
}`;

export default class Slider extends React.Component {
  render() {
    return <StyledSlider>{this.props.children}</StyledSlider>;
  }
}
