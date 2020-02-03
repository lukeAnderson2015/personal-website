/*
 * Single Page App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H2Centered from 'components/H2Centered';
import CircularImg from 'components/Header/CircularImg';
import Slider from './Slider';
import Slide from './Slide';
import PanelSection from './PanelSection';
import PanelSectionHeader from './PanelSectionHeader';
import messages from './messages';
import { loadRepos } from '../App/actions';
import IntroBox from './IntroBox';
import ArticleViewer from './ArticleViewer';

// Pictures
import {pictures, weddingLukePortrait, seattleFerry, phuketSnorkel, kauaiSunset} from '../../images/all_images';

export function HomePage () {

  const slides = pictures.map((p, i) => (
    <Slide key={i}>
      <img
        src={p}
        alt="image-unavailable"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Slide>
  ));

  return (
    <div>
      <Helmet>
        <title>Lukas Anderson</title>
        <meta name="Lukas Anderson Personal Website" content="Lukas Anderson" />
      </Helmet>
      <PanelSection id="home" backgroundImage={seattleFerry} style={{ height: '100vh' }}>
        <IntroBox>
          <CircularImg src={weddingLukePortrait} alt="no-image-found" />
          <H2Centered>
            <FormattedMessage {...messages.firstPanelHeader} />
          </H2Centered>
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
            <FormattedMessage {...messages.firstPanelSubHeader} />
          </p>
        </IntroBox>
      </PanelSection>

      <PanelSectionHeader text="Travel & Photography" id="travel-and-photography" />
      <PanelSection>
        <Slider>{slides}</Slider>
      </PanelSection>

      <PanelSectionHeader text="Writing" id="writing"/>
      <PanelSection backgroundImage={phuketSnorkel}>
        <ArticleViewer/>
      </PanelSection>

      <PanelSectionHeader text="Music" id="music"/>
      <PanelSection backgroundImage={kauaiSunset}>
          <div style={{height: '100vh'}}>test</div>
        </PanelSection>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
