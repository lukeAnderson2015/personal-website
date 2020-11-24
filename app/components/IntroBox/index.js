/**
 *
 * IntroBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  color: white;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

function IntroBox(props) {
  return <Div>{props.children}</Div>;
}

IntroBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(IntroBox);
