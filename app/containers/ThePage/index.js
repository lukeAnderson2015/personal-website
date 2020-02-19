/*
 * Single Page App
 *
 */

import React from 'react';
import styled from 'styled-components';
import {
  PanelSection,
  H2Centered,
  IntroBox,
  CircularImg,
  PanelSectionHeader,
  ArticleViewer,
  MusicPlayer,
  Slider,
} from 'components';
import {
  weddingLukePortrait,
  seattleFerry,
  kauaiSunset,
  phuketSnorkel,
} from '../../images/all_images';

const IntroSubHeader = styled.p`
  font-style: italic;
  margin: 0;
`;

export default function ThePage() {
  return (
    <div>
      <PanelSection id="home" backgroundImage={seattleFerry}>
        <IntroBox>
          <CircularImg src={weddingLukePortrait} alt="no-image-found" />
          <H2Centered>
            <span>Lukas Anderson</span>
          </H2Centered>
          <IntroSubHeader>Explorer. Creator. Developer.</IntroSubHeader>
        </IntroBox>
      </PanelSection>

      <PanelSectionHeader
        text="Travel & Photography"
        id="travel-and-photography"
      />
      <PanelSection>
        <Slider />
      </PanelSection>

      <PanelSectionHeader text="Writing" id="writing" />
      <PanelSection backgroundImage={phuketSnorkel}>
        <ArticleViewer />
      </PanelSection>

      <PanelSectionHeader text="Music" id="music" />
      <PanelSection backgroundImage={kauaiSunset}>
        <MusicPlayer />
      </PanelSection>

      {/* <PanelSectionHeader text="Music" id="music" />
      <PanelSection backgroundImage={kauaiSunset} /> */}
    </div>
  );
}
