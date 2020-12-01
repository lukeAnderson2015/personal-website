/*
 * Single Page App
 *
 */

import React, { Fragment } from 'react';
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
  TravelContainer,
} from 'components';
import pictures, {
  weddingLukePortrait,
  seattleFerry,
} from '../../images/all_images';

const IntroSubHeader = styled.p`
  font-style: italic;
  margin: 0;
`;

export default function ThePage({ windowWidth }) {
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
        <PhotoContainer photos={pictures} windowWidth={windowWidth} />
      </PanelSection>

      <PanelSectionHeader text="Writing" id="writing" />
      <PanelSection>
        <ArticleViewer windowWidth={windowWidth} />
      </PanelSection>

      {windowWidth > 768 ?
        <Fragment>
          <PanelSectionHeader text="Travel" id="travel" />
          <PanelSection>
            <TravelContainer />
          </PanelSection>
        </Fragment>
        : null
      }

      {/* <PanelSectionHeader text="Music" id="music" />
      <PanelSection backgroundImage={kauaiSunset}>
        <MusicPlayer />
      </PanelSection> */}
    </div>
  );
}
