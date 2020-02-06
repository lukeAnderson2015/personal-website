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
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  font-family: 'Jim Nightshade', italic;
  color: rgb(115, 115, 115);
  height: 5vh;
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
