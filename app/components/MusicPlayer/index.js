/**
 *
 * MusicPlayer
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'utils/context';
import ShortId from 'shortid';
import Song from '../Song/Loadable';
import Player from '../Player/Loadable';
import songs from '../../songs';

const SongListWrapper = styled.div`
  width: 40vw;
  height: 90vh;

  background-color: rgb(220, 220, 220, 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 100vh;
  padding-top: 5vh;
`;

function MusicPlayer() {
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const songList = songs.map(s => (
    <Song key={ShortId.generate()} song={s} onClick={setSelectedSong} />
  ));

  return (
    <Provider value={selectedSong}>
      <Wrapper>
        <Player songs={songs} />
        <SongListWrapper>{songList}</SongListWrapper>
      </Wrapper>
    </Provider>
  );
}

export default memo(MusicPlayer);
