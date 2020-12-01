/**
 *
 * Song
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 20vw;
  height: 10vh;
  color: white;
  background-color: rgb(75, 80, 150);
`;

function Song({ song }) {
  return <Div>{song.title}</Div>;
}

Song.propTypes = {
  song: PropTypes.object,
};

export default memo(Song);
