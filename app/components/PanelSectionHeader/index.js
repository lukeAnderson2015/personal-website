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

  font-size: 2em;
  font-family: 'Jim Nightshade', italic;
  font-weight: normal;
  height: 3em;
  margin: 0;
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
