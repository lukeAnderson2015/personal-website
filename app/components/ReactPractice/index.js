/**
 *
 * ReactPractice
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;

function ReactPractice() {
  return <Wrapper />;
}

export default memo(ReactPractice);
