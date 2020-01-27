import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledSlide = styled.div`
  flex-shrink: 0;
  width: 50vw;
  height: auto;
  scroll-snap-align: start;
`;

export default class Slide extends React.Component {
  render() {
    return <StyledSlide>{this.props.children}</StyledSlide>;
  }
}

Slide.propTypes = {
  img: propTypes.object,
};
