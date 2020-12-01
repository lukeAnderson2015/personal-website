/**
 *
 * PanelSectionHeader
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const WhiteDividerLine = styled.div`
  border-left: solid white 1px;
  width: 1px;
  height: 40%;
  margin-right: 0.5em;

  @media screen and (min-width: 920px) {
    display: none;
  }
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  padding-left: 0.75em;
  margin: 0 0 0 2.5em;

  @media screen and (min-width: 920px) {
    justify-content: center;
    margin: 0;
    padding: 1em 2em 1em 2em;
  }

  font-family: 'Jim Nightshade', italic;
  font-weight: normal;
  height: 3em;
`;

function PanelSectionHeader({ style, id, text }) {
  return (
    <Header style={{ ...style }} id={id}>
      <WhiteDividerLine />
      <span>{text}</span>
    </Header>
  );
}

PanelSectionHeader.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string,
};

export default memo(PanelSectionHeader);
