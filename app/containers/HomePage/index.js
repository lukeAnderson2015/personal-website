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
import spiral_plant from '../../images/spiral_plant.jpg';
import Collapsible from 'components/Collapsible';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Input from './Input';
import PanelSection from './PanelSection';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Hexagon from 'react-hexagon';
import articles from './articles';


const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
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

  const articleDropdowns = articles.map( (article, index) => {
      return <article
        style={{ height: 'auto', width: '70%', marginRight: '15%', marginLeft: '15%'}}
        key={index}
        > 
        <div style={{ width: '50%', marginLeft: '25%', padding: '15px 0px 0px 15px', borderBottom: 'grey solid 1px'}}/>
        {/* <Collapsible title ={`${article.title} - ${article.date}`}> */}
          {article.title} - {article.date}
          <p>{article.text}</p>
        {/* </Collapsible> */}
      </article> 
  })

  return (
      // <Helmet>
      //   <title>Lukas Anderson</title>
      //   <meta
      //     name="description"
      //     content="A brief dig into Lukas Anderson"
      //   />
      // </Helmet>
      <PanelSection style={{backgroundImage: `url(${spiral_plant})`, backgroundSize: 'cover', textDecorationColor: 'white', height: '768px'}}>
        <H2Centered >
          <FormattedMessage {...messages.firstPanelHeader} />
        </H2Centered>
        <p style={{textAlign: 'center'}}>
          <FormattedMessage {...messages.firstPanelSubHeader} />
        </p>
      </PanelSection>
      
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
