/**
 *
 * Player
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Consumer } from 'utils/context';

const Div = styled.div`
  width: 20vw;
  height: 15vh;
`;

function Player() {
  return <Consumer>{selectedSong => <Div>{selectedSong.title}</Div>}</Consumer>;
}

export default memo(Player);
