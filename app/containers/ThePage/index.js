/*
 * Single Page App
 *
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Photos,
  PanelSection,
  H2Centered,
  IntroBox,
  CircularImg,
  PanelSectionHeader,
  ArticleViewer,
  Introduction,
  Travel,
} from 'components';
import pictures, {
  weddingLukePortrait,
  seattleFerry,
} from '../../images/all_images';

const IntroSubHeader = styled.p`
  font-style: italic;
  margin: 0;
`;

const INTRODUCTION = "Introduction";
const PHOTOGRAPHY = "Photography";
const WRITING = "Writing";
const TRAVEL = "Travel";

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

      <PanelSectionHeader text={INTRODUCTION} id={INTRODUCTION.toLowerCase()} />
      <PanelSection>
        <Introduction />
      </PanelSection>

      <PanelSectionHeader text={PHOTOGRAPHY} id={PHOTOGRAPHY.toLowerCase()} />
      <PanelSection>
        <Photos photos={pictures} windowWidth={windowWidth} />
      </PanelSection>

      <PanelSectionHeader text={WRITING} id={WRITING.toLowerCase()} />
      <PanelSection>
        <ArticleViewer windowWidth={windowWidth} />
      </PanelSection>

      {windowWidth > 768 ?
        <Fragment>
          <PanelSectionHeader text={TRAVEL} id={TRAVEL.toLowerCase()} />
          <PanelSection>
            <Travel />
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
