/**
 *
 * PanelSectionHeader
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h1`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  font-family: 'Jim Nightshade', italic;
  background: -moz-linear-gradient(
    180deg,
    rgba(160, 160, 160, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(160, 160, 160, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(160, 160, 160, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: rgb(115, 115, 115);
  height: 25vh;
  width: auto;
`;

function PanelSectionHeader(props) {
  return (
    <Header style={{ ...props.style }} id={props.id}>
      <span>{props.text}</span>
    </Header>
  );
}

PanelSectionHeader.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string,
};

export default memo(PanelSectionHeader);
