/**
 *
 * IntroBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-left: 1.5%;
  padding: 20px;
  color: white;
`;

function IntroBox(props) {
  return <Div>{props.children}</Div>;
}

IntroBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default memo(IntroBox);
