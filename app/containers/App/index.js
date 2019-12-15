/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import TravelsPage from 'containers/TravelsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 766;
  flex-direction: column;
  background: -webkit-linear-gradient(rgb(150, 200, 200), rgb(211, 211, 211));
  background: -o-linear-gradient(rgb(150, 200, 200), rgb(211, 211, 211));
  background: -moz-linear-gradient(rgb(150, 200, 200), rgb(211, 211, 211));
  background: linear-gradient(rgb(150, 200, 200), rgb(211, 211, 211));
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle=""
      >
        <meta name="description" content="A collection of thoughts" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
