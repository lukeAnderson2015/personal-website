/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2Centered from 'components/H2Centered';
import Collapsible from 'components/Collapsible';
import { CircularImg } from 'components/Header/CircularImg';
import Slider from './Slider';
import Slide from './Slide';
import PanelSection from './PanelSection';
import PanelSectionHeader from './PanelSectionHeader';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import IntroBox from './IntroBox';
import ArticleViewer from './ArticleViewer';
import linkedInIcon from '../../images/icons8-linkedin-64.png';
import Img from 'components/Img';

// Pictures
import {pictures, weddingLukePortrait, seattleFerry, kauaiSunset} from '../../images/all_images';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

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
        <meta name="description" content="Lukas Anderson" />
      </Helmet>
      <a href="https://www.linkedin.com/in/lukas-anderson-4a786b42" target="_blank" title="LinkedIn" style={{position: 'fixed'}}>
        <Img src={linkedInIcon} alt="icon-unavailable"/>
      </a>
      <PanelSection backgroundImage={seattleFerry} style={{ height: '100vh' }}>
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

      <PanelSectionHeader text="Travel & Photography" />
      <PanelSection>
        <Slider>{slides}</Slider>
      </PanelSection>

      <PanelSectionHeader text="Writing" />
      <PanelSection backgroundImage={kauaiSunset}>
        <ArticleViewer/>
      </PanelSection>

      {/* <PanelSection backgroundImage={kauaiSunset}>
        <PanelSectionHeader text="Music" />
      </PanelSection> */}
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

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
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
