/*
 * Single Page App
 *
 */

import React from 'react';
import styled from 'styled-components';
import {
  PhotoContainer,
  PanelSection,
  H2Centered,
  IntroBox,
  CircularImg,
  PanelSectionHeader,
  ArticleViewer,
  IntroductionContainer,
} from 'components';
import {
  pictures,
  weddingLukePortrait,
  seattleFerry,
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

      <PanelSectionHeader text="Introduction" id="introduction" />
      <PanelSection>
        <IntroductionContainer />
      </PanelSection>

      <PanelSectionHeader text="Photography" id="photography" />
      <PanelSection>
        <PhotoContainer photos={pictures} />
      </PanelSection>

      <PanelSectionHeader text="Writing" id="writing" />
      <PanelSection>
        <ArticleViewer />
      </PanelSection>

      {/* <PanelSectionHeader text="Music" id="music" />
      <PanelSection backgroundImage={kauaiSunset} /> */}
    </div>
  );
}
