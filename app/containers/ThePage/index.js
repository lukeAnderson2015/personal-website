/*
 * Single Page App
 *
 */

import React from 'react';
import ShortId from 'shortid';
import {
  Slide,
  Slider,
  PanelSection,
  Img,
  H2Centered,
  IntroBox,
  CircularImg,
  PanelSectionHeader,
  ArticleViewer,
} from 'components';
import {
  pictures,
  weddingLukePortrait,
  seattleFerry,
  phuketSnorkel,
  kauaiSunset,
} from '../../images/all_images';

export default function ThePage() {
  const slides = pictures.map(p => (
    <Slide key={ShortId.generate()}>
      <Img
        src={p}
        alt="image-unavailable"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Slide>
  ));

  return (
    <div>
      <PanelSection id="home" backgroundImage={seattleFerry}>
        <IntroBox>
          <CircularImg src={weddingLukePortrait} alt="no-image-found" />
          <H2Centered>
            <span>Lukas Anderson</span>
          </H2Centered>
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
            Explorer. Creator. Developer.
          </p>
        </IntroBox>
      </PanelSection>

      <PanelSectionHeader
        text="Travel & Photography"
        id="travel-and-photography"
      />
      <PanelSection>
        <Slider>{slides}</Slider>
      </PanelSection>

      <PanelSectionHeader text="Writing" id="writing" />
      <PanelSection backgroundImage={phuketSnorkel}>
        <ArticleViewer />
      </PanelSection>

      {/* <PanelSectionHeader text="Music" id="music" />
      <PanelSection backgroundImage={kauaiSunset} /> */}
    </div>
  );
}
